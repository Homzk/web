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
  patronContrasenya = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)$";

  constructor(private form:FormBuilder)
  {
    this.formulario = this.form.group({
      nombreUsuario : ['',[Validators.required,Validators.minLength(4)]],
      contrasenya : ['',Validators.required,Validators.minLength(8),Validators.pattern(this.patronContrasenya)]
    });
    this.nombreUsuario = this.formulario.controls['nombreUsuario']
    this.contrasenya = this.formulario.controls['contrasenya']

  }

  ngOnInit(): void {
    
  }
  inicioSesion(){

  }
  
}
