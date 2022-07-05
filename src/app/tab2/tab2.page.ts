
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Notice } from '../interfaces';



import { NewsService } from '../services/news.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page
  implements OnInit {

  lateralbar = ["Noticias", "Eventos", "Investigaciones"]

  page: number = 0;

  selectedCategory: string = this.lateralbar[0]

  constructor(private newservice: NewsService) { }

  ngOnInit() {
    this.newservice.news = []
    this.page = 1;
  }

  /**
   * cambiar la vista en dependencia de la barra de navegacion
   * 
   */
  segmentChange(category: any) {
    this.selectedCategory = category.detail.value
  }

  loadData(event: any) {
    setTimeout(() => {

      event.target.complete();
      this.page++
      this.newservice.getNews(this.page).subscribe((res: Notice[]) => {
        res.forEach((item) => { this.newservice.news.push(item); })
      })

      if (this.newservice.news[this.newservice.news.length - 1] == null) {
        event.target.disabled = true;
      }
    }, 500);
  }

}


