import { Component , OnInit,Input} from '@angular/core';
import {NoticiasService} from "../../services/noticias.service"
import {Noticias} from "../../interfaces/noticias"
import { NoticiaForoComponent } from '../noticia-foro/noticia-foro.component';
@Component({
  selector: 'app-vista-foro',
  templateUrl: './vista-foro.component.html',
  styleUrls: ['./vista-foro.component.scss']
})
export class VistaForoComponent implements OnInit{
  currentItem = 2;

  datosNoticias: Array<Noticias>=[]
  noticia: Noticias
  constructor(private servicioNoticia:NoticiasService){}

 ngOnInit(): void {
   this.servicioNoticia.consultarNoticias().subscribe(datos=>{
        for(let i = 0; i<datos.length;i++){
          this.datosNoticias.push(datos[i])
        }
        console.log(datos)
   })
 }


 abrirNoticia(id:number){
  
    this.currentItem = id
    this.servicioNoticia.traspasarId(id)
    console.log(this.currentItem,id)
 }

}
