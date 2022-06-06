import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../services/perfil.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';
  usuario: Object = {};

  constructor(private service: PerfilService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  async autenticarse(usuario: string, contrasena: string){
    this.username = usuario;
    this.password = contrasena;
    console.log(this.username);
    this.service.login(this.username, this.password).subscribe(data => {
      this.usuario = data
    });

    if(Object.entries(this.usuario).length ===1){
      this.router.navigate(['/tabs'])
    }
    else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Por favor verifique su usuario y contraseña',
        buttons: ['OK']
      });

      await alert.present();
    }
}

}
