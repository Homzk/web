
import { Component , OnInit} from '@angular/core';
import { AbstractControl, FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';
import { AlmacenService } from 'src/app/services/almacen.service';
@Component({
  selector: 'app-vista-ingresar-alerta',
  templateUrl: './vista-ingresar-alerta.component.html',
  styleUrls: ['./vista-ingresar-alerta.component.scss']
})
export class VistaIngresarAlertaComponent {
  formulario: FormGroup;
  titulo: AbstractControl;
  descripcion: AbstractControl;
  token:string="";
  constructor(private form:FormBuilder,private servicio:AlertasService, private almacen:AlmacenService)
  {
    this.formulario = this.form.group({
      titulo : ['',[Validators.required,Validators.minLength(4)]],
      descripcion : ['',[Validators.required]]
    });
    this.titulo = this.formulario.controls['titulo']
    this.descripcion = this.formulario.controls['descripcion']
  }
  ngOnInit(): void {
  }

  enviarAlerta(){
    console.log("datos cargados")
    this.servicio.obtenerToken().subscribe(token=>{
      this.token=token;
      this.servicio.alerta(this.formulario.get("titulo").value, this.formulario.get("descripcion").value,this.token)
      window.location.href="/ingresarAlerta";
    }
    )
  }
}
