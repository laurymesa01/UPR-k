import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { NewsResponse } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  getTopHeadLines() {
    
    
  
    return this.http.get<NewsResponse>('https://noticias.upr.edu.cu/wp-json/wp/v2/posts')
  }
}
