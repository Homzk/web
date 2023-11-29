import { Component , OnInit} from '@angular/core';
import { AbstractControl, FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { LoginService } from 'src/app/services/login.service';
import { Sesion } from 'src/app/clases/sesion';
import { AlmacenService } from 'src/app/services/almacen.service';
@Component({
  selector: 'app-vista-inicio-sesion',
  templateUrl: './vista-inicio-sesion.component.html',
  styleUrls: ['./vista-inicio-sesion.component.scss']
})
export class VistaInicioSesionComponent implements OnInit{
  formulario: FormGroup;
  nombreUsuario: AbstractControl;
  contrasenya: AbstractControl;
  datos: Sesion;
  token:string="";
  msg: string="";
  logged : Boolean= false;
  constructor(private form:FormBuilder,private servicio:LoginService, private almacen:AlmacenService)
  {
    this.formulario = this.form.group({
      nombreUsuario : ['',[Validators.required,Validators.minLength(4)]],
      contrasenya : ['',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    });
    this.nombreUsuario = this.formulario.controls['nombreUsuario']
    this.contrasenya = this.formulario.controls['contrasenya']

  }

  ngOnInit(): void {

    if(this.almacen.obtenerUsuarioActual()){
      window.location.href="/inicio"
    }

    if (this.almacen.obtenerUsuarioActual()){
      this.logged = true;
      this.msg="usted ya está logeado";
    }

  }
  inicioSesion(){
    
    this.servicio.obtenerToken().subscribe(token=>{
      this.token=token;
      this.servicio.validacion(this.formulario.get("nombreUsuario").value, this.formulario.get("contrasenya").value,this.token).subscribe(datos=>{
       console.log(datos);
       console.log(this.formulario.get("nombreUsuario"))
       if(datos.length==0){
             this.msg="Login no existe";
             console.log("login vacio")
        }else{
           datos={token:datos[0].rut,usuario:datos[0].email,rol:datos[0].rol};
           console.log("login correcto")
           this.almacen.CrearSesion(datos);
           window.location.href="/inicio";
           
        }
   })
   });

  }
  
}
