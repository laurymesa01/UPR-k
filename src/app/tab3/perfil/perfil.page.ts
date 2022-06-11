import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router, private service: PerfilService) { }

  ngOnInit() {
  }
  items = ['Mis notas', 'Correo', 'Configuración', 'Datos y almacenamiento'];
  usuario: Object = {}


  buttonClick(){
    this.router.navigate(['/notas'])
  }
}
