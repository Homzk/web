import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  servidor = "http://127.0.0.1:3000"

  constructor(private servicio:HttpClient) { }



    registar(usuario:string,rut:string,email:string,region:string,comuna:string,contrasenya:string,token:string){
      
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type','application/json');
      
      const params = new HttpParams();
      params.set("nombre",usuario);
      params.set("rut", rut); 
      params.set("email",email);
      params.set("region", region); 
      params.set("comuna",comuna);
      params.set("contrasenya", contrasenya); 
      console.log(`${usuario}${rut}${email}${region}${comuna}${contrasenya}`)
      const solicitud = this.servicio.post(`${this.servidor}/usuarios?nombre=${usuario}&rut=${rut}&email=${email}&region=${region}&comuna=${comuna}&contrasenya=${contrasenya}`,{ 'headers': headers })

      solicitud.subscribe()

    }


    obtenerToken():Observable<any>{
      return this.servicio.get(`${this.servidor}/token` );
    } 
}
