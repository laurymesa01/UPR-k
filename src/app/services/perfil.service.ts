import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  usuario: Object = {}

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:5000/usuarios'

  login(usuario: string, contrasena: string): Observable<Object>{
    return this.http.get<Object>(this.apiUrl, {
      params: {
        usuario: usuario,
        contrasena: contrasena,
      }
    });
  }

}
