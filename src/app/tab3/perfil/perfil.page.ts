import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PerfilService } from 'src/app/services/perfil.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {


 usuario : Object = {};

  constructor(private router: Router, private service: PerfilService) { }

  ngOnInit() {
     this.usuario = this.service.usuario;
    console.log(this.usuario);

}



  items = ['Mis notas', 'Correo', 'Configuración', 'Datos y almacenamiento'];



  buttonClick(){
    this.router.navigate(['/notas'])
  }
}
