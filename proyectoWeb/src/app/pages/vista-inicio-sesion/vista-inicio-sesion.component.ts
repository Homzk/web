import { Component , OnInit} from '@angular/core';
import { AbstractControl, FormGroup ,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-vista-inicio-sesion',
  templateUrl: './vista-inicio-sesion.component.html',
  styleUrls: ['./vista-inicio-sesion.component.scss']
})
export class VistaInicioSesionComponent implements OnInit{
  formulario: FormGroup;
  nombreUsuario: AbstractControl;
  contrasenya: AbstractControl;


  constructor(private form:FormBuilder)
  {
    this.formulario = this.form.group({
      nombreUsuario : ['',[Validators.required]],
      contrasenya : ['',Validators.required]
    });
    this.nombreUsuario = this.formulario.controls['nombreUsuario']
    this.contrasenya = this.formulario.controls['contrasenya']
  }

  ngOnInit(): void {
    
  }
  inicioSesion(){

  }
}
