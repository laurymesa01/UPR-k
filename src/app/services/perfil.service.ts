import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private apiUrl = 'http://localhost:5000/usuarios';



  constructor(private http: HttpClient) { }

  login(usuario: string, contrasena: string): Observable<Object>{
   return this.http.get<Object>(this.apiUrl, {
      params: {
        usuario: usuario,
        contrasena: contrasena,
      }
    });
   }


}
