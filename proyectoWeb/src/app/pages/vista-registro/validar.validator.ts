import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


  export const validarContrasenya : ValidatorFn = (control: AbstractControl):ValidationErrors|null =>{

     let contrasenya = control.get('contrasenya');
     let confirmarContra = control.get('Ccontrasenya');
     if(contrasenya && confirmarContra && contrasenya?.value != confirmarContra?.value){
        console.log("son distintas")
        return {
            
            passwordmatcherror : true 
        }
     }
    console.log("son iguales")
    return null; 
   }