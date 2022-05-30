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
  public posts: NewsResponse[][] = []
  
  
  public events: NewsResponse[] = []
  public investigations: NewsResponse[] = []
  public tempposts: NewsResponse[][] = []
   page:number = 0;
  
  selectedCategory:string=this.lateralbar[0]

  constructor(private newservice: NewsService) { }
  
  
  ngOnInit() {
     this.page=1;
    this.newservice.getTopHeadbyContent(this.page).subscribe(res => {
      console.log("res====", res);
     
      
      this.posts = [res];
      
    
      this.tempposts=this.posts

    }
    )
   

    
  }
  

//cambiar la vista en dependencia de la barra de navegacion
  segmentChange(category: any) {
      this.selectedCategory=category.detail.value
    if (this.selectedCategory === this.lateralbar[1]) {
      this
        .newservice.getTopHeadLinesEvent().subscribe(res => { this.posts[0] = this.events })
      
  
    }
    if (this.selectedCategory === this.lateralbar[2]) {
      this
      .newservice.getTopHeadLinesEvent().subscribe(res=>{this.posts[0]=this.investigations})
  
    }
    if (this.selectedCategory === this.lateralbar[0]) {
      
      this.posts=this.tempposts
      
  
   }
 console.log(category.detail.value);
    
  }

  loadData(event: any) {
  
    
    setTimeout(() => {

      event.target.complete();
      this.page++
    this.newservice.getTopHeadbyContent(this.page).subscribe(res => {
      this.posts.push(res);
              console.log(this.posts);
              console.log("lengt",this.posts.length );
              
     
     /*  if (this.posts.length = 5) {
  
         console.log("es menor");
         this.posts.splice(0, 1)
        console.log(this.posts);
        

        
      } */
 
    }
      
 ) 
         

      if (this.posts[this.posts.length-1]===[]  ) {
        event.target.disabled = true;
      }
    }, 500);
    
   

  }
  

}
