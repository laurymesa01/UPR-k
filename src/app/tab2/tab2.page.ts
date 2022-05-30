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
  public response: NewsResponse[][] = []
  
  
  public events: NewsResponse[] = []
  public investigations: NewsResponse[] = []
  public tempposts: NewsResponse[][] = []
   page:number = 0;
  
  selectedCategory:string=this.lateralbar[0]

  constructor(private newservice: NewsService) { }
  
  
  ngOnInit() {
   
     this.page=1;
    this.newservice.getNews(this.page).subscribe(res => {
      console.log("res====", res);
     
      
      this.newservice.response = [res];
       this.response=this.newservice.response
            this.tempposts=this.response

    }
    )
 
  }

//cambiar la vista en dependencia de la barra de navegacion
  segmentChange(category: any) {
      this.selectedCategory=category.detail.value
    if (this.selectedCategory === this.lateralbar[0]) {
   this.response=this.newservice.response
 }
    if (this.selectedCategory === this.lateralbar[1]) {
     
      this.response=[]
     
  
    }
    if (this.selectedCategory === this.lateralbar[2]) {
     this.response=[]
     
  
   }
 console.log(category.detail.value);
    
  }

  loadData(event: any) {
  
    
    setTimeout(() => {

      event.target.complete();
      this.page++
    this.newservice.getNews(this.page).subscribe(res => {
      this.response.push(res);
       this.newservice.response=this.response
              console.log(this.response);
              console.log("lengt",this.response.length );
 }
      
 ) 

      if (this.response[this.response.length-1]===[]  ) {
        event.target.disabled = true;
      }
    }, 500);
    
   

  }
  

}
