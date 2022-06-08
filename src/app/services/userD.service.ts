import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Data } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DirectoryUser } from "../interfaces/IDirectorio";

@Injectable({
    providedIn: 'root'
})

export class UserDService {
    private url: String = '';

    constructor(private http: HttpClient) { }

    getUserD(name: String){
      //  this.url = `http://directorio.upr.edu.cu/search?ldap_consulta%5Bsearch_display_name%5D=${name}_consulta%5Bsearch_state%5D=&ldap_consulta%5Bcookie_page%5D=&ldap_consulta%5Bop%5D=2`
      console.log(`http://directorio.upr.edu.cu/search?ldap_consulta%5Bsearch_display_name%5D=${name}&ldap_consulta%5Bsearch_state%5D=&ldap_consulta%5Bcookie_page%5D=&ldap_consulta%5Bop%5D=2`); 
     
      return this.http.get<Data>(`http://directorio.upr.edu.cu/search?ldap_consulta%5Bsearch_display_name%5D=${name}&ldap_consulta%5Bsearch_state%5D=&ldap_consulta%5Bcookie_page%5D=&ldap_consulta%5Bop%5D=2`)
      .pipe(status => status['data']);
       
       
    }

    
}