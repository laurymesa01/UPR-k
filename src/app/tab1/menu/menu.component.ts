import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  lista = [
    {
     name:"Telefonos",
     icon:"call-outline",
     direccion:"/telefonos"
    },
    {
     name:"Directorio",
     icon:"person-outline",
     direccion:"directorio"
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


}
