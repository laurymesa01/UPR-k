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

  public users: Data = [];
  public listObj: Data = [];
  name: string = '';



  constructor(private service: UserDService) { }

  ngOnInit() { }

  searchUser(): void {
    this.service.getUserD(this.name)
      .subscribe((resp: DirectoryUser) => {

        const data = resp.data;

        console.log(data);
        const list = Object.entries(data);

        for (let index = 0; index < list.length ; index++) {
          const elelment = list[index];
          const [,b] = elelment;
          const {displayname,mail,description,physicaldeliveryofficename}  = b;
          console.log(displayname,mail,physicaldeliveryofficename);
          const name = displayname[0] ;
          const desc = description[0];
          const email = mail[0]   ;
          console.log(name);
          console.log(email);
          console.log(desc)
          
          
  }

});


  }

}
