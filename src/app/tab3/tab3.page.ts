import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {



  constructor(private router: Router, private service: PerfilService) {}

  items = ['Mis notas', 'Configuracion', 'Correo', 'Datos y almacenamiento'];
  usuario: Object = {}


  buttonClick(){
    this.router.navigate(['/notas'])
  }
}
