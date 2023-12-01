import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  servidor = "http://127.0.0.1:3000"
  idAbuscar :number;
  constructor(private servicio:HttpClient) { }


  consultarNoticias():Observable<any>{
    return this.servicio.get(`${this.servidor}/noticias` );
  }

  buscarNoticiaPorId(id:number):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    
    
    const params = new HttpParams();
    params.set("id",id);
    return this.servicio.get(`${this.servidor}/noticiasPorId?idNoticia=${id}` );
  }

  traspasarId(id:number){
    this.idAbuscar=id
  }

  obtenerId(){
    console.log(this.idAbuscar)
    return this.idAbuscar
  }
}
