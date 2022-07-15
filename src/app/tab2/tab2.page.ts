
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
   * sirve para cambiar de vista en el ionsegment
   *  ,el valor de el evento se guarda en la variable 
   * selectedCategory 
   * @param e evento
   */
  segmentChange(e: any) {
    this.selectedCategory = e.detail.value
  }
  /**
   * añade un settimeout de medio segundo ,
   * aumenta la variable page para hacer una peticion hacia 
   * la proxima pagina y lo aañade 
   * al arreglo de noticias para su visualizacion
   * despues condiciona la desactivacion de infinitiscroll ,
   * si la ultima posicion de el arreglo de noticias esta vacia se desabilita
   * 
   * @param event evento de infinitiscroll
   */
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


