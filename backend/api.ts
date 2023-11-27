const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'vidaMarina'
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


app.post('/usuarios', jsonParser, (req:any, res:any)=>{

    
    let nombre = req.body.nombre;
    let rut = req.body.rut;
    let correo = req.body.email;
    let region = req.body.region;
    let comuna = req.body.comuna;
    let contrasenya = req.body.contrasenya;
    connection.query('insert into usuarios (nombre,rut,email,region,comuna,contrasenya) values (?,?,?,?,?,?)', [nombre,rut,correo,region,comuna,contrasenya], function(error:any,results:any,fields:any){
        if(error) throw error;
        res.send(JSON.stringify(results.insert))
    })
    res.send("dato insertado")
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

app.listen(configuracion,()=>{
    console.log("servidor activo..")
})