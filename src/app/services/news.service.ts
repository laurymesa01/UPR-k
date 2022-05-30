import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { NewsResponse,ContentbyType } from '../interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private contentbyType: ContentbyType = {}
  public response:NewsResponse[][] = []
 

  constructor(private http: HttpClient
  ) { }
  
  
  getNews(page: number = 0): Observable<NewsResponse[]> {

    return this.http.get<NewsResponse[]>(`https://noticias.upr.edu.cu/wp-json/wp/v2/posts?page=${page}`).pipe()

  }
  getTopHeadLinesEvent() {
    return this.http.get<NewsResponse>('https://noticias.upr.edu.cu/wp-json/wp/v2/posts')
  }
  
  
   
}