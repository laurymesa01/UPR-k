import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../services/perfil.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


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


  constructor(private service: PerfilService, private router: Router, public alertController: AlertController, public toastController: ToastController) {}


  async autenticarse(){

    console.log(this.login);
    this.service.login(this.login.usuario, this.login.contrasena).subscribe(data => {
      this.usuario = data
      if(Object.entries(this.usuario).length ===1){
        this.router.navigate(['/perfil'])
      }
       else{
         console.log('no encontrado');


       }
    });


}
}
