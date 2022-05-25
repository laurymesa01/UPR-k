import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NewsResponse } from '../interfaces';

import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page
  implements OnInit{
 
  lateralbar = ["Noticias", "Eventos", "Investigaciones"]
  public posts:NewsResponse[]=[]

  constructor(private newservice:NewsService) { }
  
  
  ngOnInit() {
    this.newservice.getTopHeadLines().subscribe(res => {
      this.posts.push(res);
     
    }
      )
   
    console.log(this.posts);
    
  }
  segmentChange(category: string) {
    console.log(category);
    
  }

  loadData(event: any) {
   /*  this.newservice.getTopHeadLines().subscribe(res => {this.posts= }
     )
    console.log(event);
     */
    
  }

}






