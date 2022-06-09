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
    

    constructor(private http: HttpClient) { }

    getUserD(name: String){
      const url = `http://directorio.upr.edu.cu/search?ldap_consulta%5Bsearch_display_name%5D=${name}&ldap_consulta%5Bsearch_state%5D=&ldap_consulta%5Bcookie_page%5D=&ldap_consulta%5Bop%5D=2`
      console.log(url); 
     
      return this.http.get(url)
  
       
       
    }

    
}