import { Component, OnInit } from '@angular/core';
import { UserDService } from 'src/app/services/userD.service';
import { Observable } from 'rxjs';
import { DirectoryUser } from 'src/app/interfaces/IDirectorio';
import { Data } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.page.html',
  styleUrls: ['./directorio.page.scss'],
})

export class DirectorioPage implements OnInit {
  resultado: Data;
  name: string = '';
  data: any;
  

  constructor(private service: UserDService) { }

  ngOnInit() {
    
    

  }

  searchUser():void{
 this.data = this.service.getUserD(this.name);

 
 console.log(this.data);
  }

}
