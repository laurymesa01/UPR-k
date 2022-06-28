import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../services/perfil.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  login = {
    usuario: '',
    contrasena: '',
  }
  usuario: Object = {};


  constructor(private service: PerfilService, private router: Router) {}


   autenticarse(){

    console.log(this.login);
    
      if(this.service.login(this.login.usuario, this.login.contrasena)){
        this.router.navigate(['/tabs/tab3/perfil'])
      }
       else{
         console.log('no encontrado');


       }
    


}
}
