import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  servidor = "http://127.0.0.1:3000"

  constructor(private servicio:HttpClient) { }


  validacion(usuario: string,password:string,token:string):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    headers= headers.append('access-token',token);
    
    
    const params = new HttpParams();
    params.set("email",usuario);
    params.set("contrasenya", password); //Create new HttpParams
     //return this.http.get(`${environment.apiUrl}/login`,{params:params});
     //let url=`${environment.apiUrl}/login?usuario=${JSON.stringify(usuario)}&password=${JSON.stringify(password)}`;
    return this.servicio.get(`${this.servidor}/login?email=${usuario}&contrasenya=${password}`,{ 'headers': headers });


  }

  obtenerToken():Observable<any>{
    return this.servicio.get(`${this.servidor}/token` );
  } 
}
