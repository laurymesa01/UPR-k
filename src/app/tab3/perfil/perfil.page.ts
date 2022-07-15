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


  usuario: Object = {};

  constructor(private router: Router, private service: PerfilService) { }

  ngOnInit() {

  }

  items = ['Mis notas', 'Correo', 'Horario', 'Configuración'];
  /**
   * navega hacia la pagina de notas
   */
  buttonClick() {
    this.router.navigate(['/notas'])
  }
}
