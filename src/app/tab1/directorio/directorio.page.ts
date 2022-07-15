import { Component, OnInit } from '@angular/core';
import { UserDService } from 'src/app/services/userD.service';
import { DirectoryUser, Person } from 'src/app/interfaces/IDirectorio';

import { Data } from '@angular/router';


@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.page.html',
  styleUrls: ['./directorio.page.scss'],
})

export class DirectorioPage implements OnInit {

  public counts: any = [];
  public listObj: Data = [];
  name: string = '';
  mostrarImagen: Boolean;
  public data: Data


  constructor(private service: UserDService) { }

  ngOnInit() { }
  /**
   * dadoel string que esta en la barra de buscar envia un 
   * arreglo de personas hacia la variable data,
   * esto se ejecuta cada vez que el evento se activa
   */
  searchUser(): void {
    this.service.getUserD(this.name)
      .subscribe((resp: DirectoryUser) => {
        this.data = resp.data
        console.log(resp);
        this.counts = Array.from(new Array(resp.data.count)).map((i, index) => index)
        const list = Object.entries(this.data);
      });
  }
  /**
   * muestra la imagen
   */
  MostrarLista() {
    this.mostrarImagen = true;
  }

}
