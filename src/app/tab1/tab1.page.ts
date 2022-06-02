import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  lista = [
     {
      name:"Telefonos",
      icon:"call-outline",
      direccion:"/telefonos"
     },
     {
      name:"Directorio",
      icon:"person-outline",
      direccion:"/telefonos"
     },
     {
      name:"Aula Virtual",
      icon:"library-outline",
      direccion:"/telefonos"
     },
     {
      name:"Wikipedia",
      icon:"receipt-outline",
      direccion:"/telefonos"
     },
     {
      name:"Noticias",
      icon:"newspaper-outline",
      direccion:"/telefonos"
     }
  ]


  constructor(private menuCrtl: MenuController,private router:Router) { }


}
