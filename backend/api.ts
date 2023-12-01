import { decode } from "punycode";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors= require("cors")
const jwt = require('jsonwebtoken')
const token=require('./config/config')
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'vidamarina'
});
connection.connect(function(error:any){
    if (error) {
        console.log("Error conectando");
        return;
    } else
    console.log("Se conecto a la BD");
});
const configuracion ={
    hostname: "localhost",
    port: 3000
};
app.get('/usuarios', jsonParser, (req:any, res:any)=>{
    connection.query('select * from usuarios',function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify(results))
    })
})



app.delete('/usuarios',jsonParser, (req:any, res:any)=>{
    let rutEliminar = req.body.rut;
    connection.query('delete from usuarios where rut = ?', [rutEliminar],function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify(results))
    })
})

app.put('/usuarios',jsonParser, (req:any, res:any)=>{
    let nombre = req.body.nombre;
    let rut = req.body.rut;
    let correo = req.body.email;
    let region = req.body.region;
    let comuna = req.body.comuna;
    let contrasenya = req.body.contrasenya;
    connection.query('update usuarios set nombre = ?, email = ?, region = ?, comuna = ?, contrasenya = ? where rut = ?', [nombre, correo, region,comuna,contrasenya,rut],function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify(results))
    })
})


app.get('/noticiasPorId', jsonParser, (req:any, res:any)=>{
    let id = req.query.idNoticia
    connection.query('select * from noticias where idNoticia = ?',[id],function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify(results))
    })
})

app.post('/noticias', jsonParser, (req:any, res:any)=>{

    let titulo = req.query.titulo;
    let tematica = req.query.tematica;
    let cuerpoNoticia = req.query.cuerpoNoticia;
    let autor = req.query.autor;
    let replicas = req.query.replicas;
    let fechaPublicacion = req.query.fechaPublicacion;
    connection.query('insert into noticias (titulo,tematica,cuerpoNoticia,autor,replicas,fechaPublicacion) values (?,?,?,?,?,?)', [titulo,tematica,cuerpoNoticia,autor,replicas,fechaPublicacion], function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify(results.insert))
    })
    res.send("noticia creada")
})
app.delete('/foro',jsonParser, (req:any, res:any)=>{
    let idNoticia = req.body.idNoticia;
    connection.query('delete from foro where idNoticia = ?', [idNoticia],function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify(results))
    })
})

const rutaSegura = express.Router();
rutaSegura.use((req:any,res:any,next:any)=>{
    const tokens = req.headers["access-token"];
    console.log("token usado ",tokens)
    jwt.verify(tokens,token.token ,(err:any,decoded:any)=>{
        if(err){
            return res.json("Token invalido")
        }else{
            req.decoded = decoded;
            req.authenticated = true;
            next();
        }
    })
})
app.get("/token",(req:any,res:any)=>{
    jwt.sign(
        {
            exp: Math.floor(Date.now()/100) + (60*60),
            data: 'bar'},token.token,function(error:any,token:any){
                console.log(token)
                res.json(token)
            }
    )
})

app.get('/login',rutaSegura,(req:any,res:any)=>{
    const correo = req.query.email
    const contrasenya = req.query.contrasenya
    connection.query('select rol,rut,email from usuarios where email = ? and contrasenya = md5(?)',[correo,contrasenya],function(error:any,respuesta:any,fields:any){
        if(error){
            throw(error)
            
        }
        else{
            res.send(respuesta);
        }
    })
})
app.post('/usuarios' , (req:any, res:any)=>{ 
    console.log("llego al api1")
    let nombre = req.query.nombre;
    let rut = req.query.rut;
    let correo = req.query.email;
    let region = req.query.region;
    let comuna = req.query.comuna;
    let contrasenya = req.query.contrasenya;
    console.log("llego al api")
    connection.query('insert into usuarios (nombre,rut,email,region,comuna,contrasenya) values (?,?,?,?,?,md5(?))', [nombre,rut,correo,region,comuna,contrasenya], function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify(results.insert))
    })
})
app.get('/alertas', (req:any, res:any)=>{
    connection.query('select * from alertas',function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify(results))
    })
})
app.post('/alertas' , (req:any, res:any)=>{ 
    let titulo = req.query.titulo;
    let descripcion = req.query.descripcion;
    console.log("llego al api")
    connection.query('insert into alertas (titulo,descripcion) values (?,?)', [titulo,descripcion], function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify(results.insert))
    })
})

app.get('/noticias', jsonParser, (req:any, res:any)=>{
    connection.query('select * from noticias',function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify(results))
    })
})
app.post('/noticias', jsonParser, (req:any, res:any)=>{
    
    let titulo = req.query.titulo;
    let tematica = req.query.tematica;
    let cuerpo = req.query.cuerpo;
    
    connection.query('insert into noticias (titulo,tematica,cuerpo) values (?,?,?)', [titulo,tematica,cuerpo], function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify(results.insert))
    })
    res.send("noticia creada")
})
app.listen(configuracion,()=>{
    console.log("servidor activo..")
})