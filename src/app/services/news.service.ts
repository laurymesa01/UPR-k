import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { NewsResponse,ContentbyType } from '../interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private contentbyType: ContentbyType = {}
 

  constructor(private http: HttpClient
  ) { }
  
  
  getTopHeadbyContent(page: number = 0): Observable<NewsResponse[]> {

    return this.http.get<NewsResponse[]>(`https://noticias.upr.edu.cu/wp-json/wp/v2/posts?page=${page}`).pipe()

  }
  getTopHeadLinesEvent() {
    return this.http.get<NewsResponse>('https://noticias.upr.edu.cu/wp-json/wp/v2/posts')
  }
  
  
   
  byContent(content: string): Observable<NewsResponse[]> {
    if (!Object.keys(this.contentbyType).includes(content)) {
      this.contentbyType[content] = {
        page: 0,
        posts: []
        
      }
      
  
    
    
      const page = this.contentbyType[content].page + 1;

      return this.getTopHeadbyContent(page);

    }
  }
}