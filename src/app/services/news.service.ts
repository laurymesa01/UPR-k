import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Notice as Notice,ContentbyType } from '../interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private contentbyType: ContentbyType = {}
  public news: Notice[][] = []
  public events: Notice[][] = []
  public investigations: Notice[][] = []
 

  constructor(private http: HttpClient
  ) { }
  
  
  getNews(page: number = 0): Observable<Notice[]> {

    return this.http.get<Notice[]>(`https://noticias.upr.edu.cu/wp-json/wp/v2/posts?page=${page}`).pipe()

  }

  //mewtodo para dadp un id devolver el objeto noticia completo
  public getNoticebyid(id: number) {
    for (let i = 0; i < this.news.length; i++) {
      for (let j = 0; j < this.news[i].length; j++) {
        if (this.news[i][j].id === id) {
          console.log(this.news[i][j]);   
          return this.news[i][j]
          }
     } 
    }
  }
}