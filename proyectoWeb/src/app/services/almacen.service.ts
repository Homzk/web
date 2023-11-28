import { Injectable } from '@angular/core';
import {Sesion} from '../clases/sesion'; 
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  private localStorageService;
  private sesionActual:Sesion=null ;

  constructor(private router:Router) { 
    this.localStorageService = localStorage;
    this.sesionActual = this.cargarDatos();
  }

  cargarDatos():Sesion{
    let datos = this.localStorageService.getItem("datos")
    return (datos) ? <Sesion> JSON.parse(datos):null;
  }
  obtenerUsuarioActual(){
    var session: Sesion = this.cargarDatos();
    return (session && session.token) ? session.token : null;
  };

  CrearSesion(session:Sesion){
      this.sesionActual=session;
      this.localStorageService.setItem('datos', JSON.stringify(session));
  }

  CerrarSesion(){
    this.localStorageService.removeItem('datos');
    this.sesionActual = null;
    this.router.navigate(['/inicio']);
  }


  Autenticado(): boolean {
    return (this.obtenerUsuarioActual() != null) ? true : false;
  };

}