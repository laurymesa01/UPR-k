import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  lista = [
    {
      name: "Historia",
      icon: "refresh-circle-outline",
      direccion: "/telefonos"
    },
    {
      name: "Sitial de honor",
      icon: "git-branch-outline",
      direccion: "/telefonos"
    },
    {
      name: "Correo",
      icon: "newspaper-outline",
      direccion: "/telefonos"
    },
    {
      name: "Evento",
      icon: "receipt-outline",
      direccion: "/telefonos"
    },
    {
      name: "Telefonos",
      icon: "call-outline",
      direccion: "/telefonos"
    },
    {
      name: "Directorio",
      icon: "person-outline",
      direccion: "directorio"
    },
    {
      name: "Aula Virtual",
      icon: "library-outline",
      direccion: "/telefonos"
    },
    {
      name: "Wikipedia",
      icon: "receipt-outline",
      direccion: "/telefonos"
    },
    {
      name: "Noticias",
      icon: "newspaper-outline",
      direccion: "/telefonos"
    }
  ]
  constructor() { }

  ngOnInit() { }




}
