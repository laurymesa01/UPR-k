import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page
implements OnInit{
  lateralbar=["Noticias","Eventos","Investigaciones"]

  constructor(private newservice:NewsService) { }
  
  
  ngOnInit() {
    this.newservice.getTopHeadLines().subscribe(resp =>
    {
      console.log(resp);
      console.log("estoy");
      
    }
    )
  }

  

}






