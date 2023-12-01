import { Component , OnInit} from '@angular/core';
import { AbstractControl, FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { AlmacenService } from 'src/app/services/almacen.service';
import { CrearnoticiaService } from 'src/app/services/crearnoticia.service';

@Component({
  selector: 'app-vista-crear-noticia',
  templateUrl: './vista-crear-noticia.component.html',
  styleUrls: ['./vista-crear-noticia.component.scss']
})
export class VistaCrearNoticiaComponent {
  formulario: FormGroup;
  titulo: AbstractControl;
  tematica: AbstractControl;
  cuerpo: AbstractControl;
  token:string="";
  constructor(private form:FormBuilder,private servicio:CrearnoticiaService, private almacen:AlmacenService)
  {
    this.formulario = this.form.group({
      titulo : ['',[Validators.required,Validators.minLength(4)]],
      tematica : ['',[Validators.required]],
      cuerpo : ['',[Validators.required]]
    });
    this.titulo = this.formulario.controls['titulo']
    this.tematica = this.formulario.controls['tematica']
    this.cuerpo = this.formulario.controls['cuerpo']
  }
  ngOnInit(): void {
  }
  crearNoticia(){
    console.log("datos cargados")
    this.servicio.obtenerToken().subscribe(token=>{
      this.token=token;
      this.servicio.noticia(this.formulario.get("titulo").value, this.formulario.get("tematica").value, this.formulario.get("cuerpo").value,this.token)
      window.location.href="/crearNoticia";
    }
    )
  }
}
