import { Component, OnInit } from '@angular/core';
import { UserDService } from 'src/app/services/userD.service';
import { Observable } from 'rxjs';
import { DirectoryUser } from 'src/app/interfaces/IDirectorio';

import { map } from 'rxjs/operators';
import { Data } from '@angular/router';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.page.html',
  styleUrls: ['./directorio.page.scss'],
})

export class DirectorioPage implements OnInit {

  public users: Data = [];
  name: string = '';



  constructor(private service: UserDService) { }

  ngOnInit() { }

  searchUser(): void {
    this.service.getUserD(this.name)
      .subscribe((resp: DirectoryUser) => {

        console.log(resp.data);
        this.users = resp.data;
      });



  }

}
