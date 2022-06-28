import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private apiUrl = 'http://localhost:5000/usuarios';
  public usuario: Object = {};


  constructor(private http: HttpClient) { }

  login(usuario: string, contrasena: string): boolean{
    this.usuario = this.http.get<Object>(this.apiUrl, {
      params: {
        usuario: usuario,
        contrasena: contrasena,
      }
    }).subscribe(data => {
      this.usuario = data
      if (Object.entries(this.usuario).length ===1) {
        return true;
      }
   });
   return false;
  }
}
