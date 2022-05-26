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
  implements OnInit {
 
  lateralbar = ["Noticias", "Eventos", "Investigaciones"]
  public posts:NewsResponse [] = []
  public events: NewsResponse[] = []
  public investigations: NewsResponse[] = []
  public tempposts: NewsResponse[] = []
   cont:number = 1;
  
  selectedCategory:string=this.lateralbar[0]

  constructor(private newservice: NewsService) { }
  
  
  ngOnInit() {
    this.newservice.getTopHeadbyContent(1).subscribe(res => {
      console.log(res);
      
      this.posts.push(res);
      
       console.log(this.posts[0])
      this.tempposts=this.posts

    }
    )
   

    
  }
  

//cambiar la vista en dependencia de la barra de navegacion
  segmentChange(category: any) {
      this.selectedCategory=category.detail.value
    if (this.selectedCategory === this.lateralbar[1]) {
      this
        .newservice.getTopHeadLinesEvent().subscribe(res => { this.posts = this.events })
      
  
    }
    if (this.selectedCategory === this.lateralbar[2]) {
      this
      .newservice.getTopHeadLinesEvent().subscribe(res=>{this.posts=this.investigations})
  
    }
    if (this.selectedCategory === this.lateralbar[0]) {
      
      this.posts=this.tempposts
      
  
   }
 console.log(category.detail.value);
    
  }

  loadData(event: any) {
    
    
    this.newservice.getTopHeadbyContent(this.cont).subscribe(res => {
      this.posts.push(res)
      console.log(this.posts);
      
      
      
    console.log(res);
    }
     
    ) 
     this.cont++;
    console.log(this.cont);
    
     console.log(event);
 
    
  }
  






}
