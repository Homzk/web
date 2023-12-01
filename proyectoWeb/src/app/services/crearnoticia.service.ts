import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrearnoticiaService {
  servidor = "http://127.0.0.1:3000"
  constructor(private servicio:HttpClient) { }
  noticia(titulo: string,tematica:string, cuerpo:string,token:string){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    //headers= headers.append('access-token',token);
    
    
    const params = new HttpParams();
    params.set("titulo",titulo);
    params.set("tematica", tematica); 
    params.set("cuerpo", cuerpo); 
    console.log(`${titulo}${tematica}${cuerpo}`)
    const solicitud = this.servicio.post(`${this.servidor}/noticias?titulo=${titulo}&tematica=${tematica}&cuerpo=${cuerpo}`,{ 'headers': headers })
    solicitud.subscribe()
  }
  obtenerToken():Observable<any>{
    return this.servicio.get(`${this.servidor}/token` );
  } 
}