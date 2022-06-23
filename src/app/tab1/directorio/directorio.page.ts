import { Component, OnInit } from '@angular/core';
import { UserDService } from 'src/app/services/userD.service';
import { Observable } from 'rxjs';
import { DirectoryUser, Displayname } from 'src/app/interfaces/IDirectorio';

import { map } from 'rxjs/operators';
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
   public data :Data


  constructor(private service: UserDService) { }

  ngOnInit() { }

  searchUser(): void {
    this.service.getUserD(this.name)
      .subscribe((resp: DirectoryUser) => {

       this.data= resp.data;
       console.log(this.data.count);
       
       this.counts=Array.from(new Array(this.data.count)).map((i, index) => index)
       console.log(this.counts);
       

        console.log(this.data);

        const list = Object.entries(this.data);

        /*  for (let index = 0; index < list.length; index++) {
          const elelment = list[index];
          const [, b] = elelment;
          const { displayname, mail, description, physicaldeliveryofficename } = b;
          // console.log(displayname, mail, physicaldeliveryofficename);
          const name = displayname;
          const desc = description;
          //const email = mail;
          console.log("name",name);
           //console.log(email);
           console.log("descr",desc) 
          console.log("data", [0].displayname[0]);

        }*/

    /*   let i = 0;
      this.users=[]
      while(i<= data.count){
        
      const item = data[i].displayname[0];
     
      console.log(item);
      
        i++;
      }
       */

      });

  }


  MostrarLista() {
    this.mostrarImagen = true;
  }

}
