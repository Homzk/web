import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunasService {
  private comunasUrl = 'assets/comunas.json'; // Ruta del archivo JSON

  constructor(private http: HttpClient) {}

  getComunas(): Observable<any> {
    return this.http.get<any>(this.comunasUrl);
  }
}