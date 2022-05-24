import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  menu = document.querySelector('.menu-O')

  constructor(menuCrtl: MenuController) {}

   

  AbrirMenu(){
    this.menu.classList.toggle("spread")

  }
}
