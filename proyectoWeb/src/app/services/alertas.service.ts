import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  servidor = "http://127.0.0.1:3000"
  constructor(private servicio:HttpClient) { }

  alerta(titulo: string,descripcion:string,token:string){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    //headers= headers.append('access-token',token);
    
    
    const params = new HttpParams();
    params.set("titulo",titulo);
    params.set("descripcion", descripcion); 
    console.log(`${titulo}${descripcion}`)
    const solicitud = this.servicio.post(`${this.servidor}/alertas?titulo=${titulo}&descripcion=${descripcion}`,{ 'headers': headers })
    solicitud.subscribe()
  }
  obtenerToken():Observable<any>{
    return this.servicio.get(`${this.servidor}/token` );
  } 
}
