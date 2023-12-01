import { Component, Input, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { VistaForoComponent } from '../vista-foro/vista-foro.component';
import { Noticias } from 'src/app/interfaces/noticias';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-noticia-foro',
  templateUrl: './noticia-foro.component.html',
  styleUrls: ['./noticia-foro.component.scss']

})


export class NoticiaForoComponent implements OnInit {
id : any;
noticia: Array<Noticias>=[]
ruta = VistaForoComponent
@Input() idNoticias : number;
  constructor(private servicioNoticia:NoticiasService,private route:ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.id)
    this.id = this.route.snapshot.paramMap.get('idNoticia')
    console.log(this.id)
    this.id = Number(this.id)
    this.servicioNoticia.buscarNoticiaPorId(this.id).subscribe(datos=>{
      for(let i = 0; i<datos.length;i++){
        this.noticia.push(datos[i])
      }
      console.log(datos)
      console.log(this.id)
      console.log(this.idNoticias)
    })
  }
  
  buscarId(id:Number){
    console.log(id)

  }
}
