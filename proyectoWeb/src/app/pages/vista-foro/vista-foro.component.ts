import { Component , OnInit} from '@angular/core';
import {NoticiasService} from "../../services/noticias.service"
import {Noticias} from "../../interfaces/noticias"
@Component({
  selector: 'app-vista-foro',
  templateUrl: './vista-foro.component.html',
  styleUrls: ['./vista-foro.component.scss']
})
export class VistaForoComponent implements OnInit{

  datosClientes: Array<Noticias>=[]
  constructor(private servicioNoticia:NoticiasService){}

 ngOnInit(): void {
   this.servicioNoticia.consultarNoticias().subscribe(datos=>{
        for(let i = 0; i<datos.length;i++){
          this.datosClientes.push(datos[i])
        }
        console.log(datos)
   })
 }

}
