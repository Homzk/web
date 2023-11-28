import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  servidor = "http://127.0.0.1:3000"

  constructor(private servicio:HttpClient) { }


  consultarNoticias():Observable<any>{
    return this.servicio.get(`${this.servidor}/noticias` );
  }
}
