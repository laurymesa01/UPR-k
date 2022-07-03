import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Notice as Notice } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class NewsService {
  public news: Notice[] = [];
  public textcontent;
  cont: number;

  constructor(private http: HttpClient) {
    this.cont = 0;
  }

  getNews(page: number = 0): Observable<Notice[]> {
    return this.http.get<Notice[]>(
      `${environment.noticiasUrl}/wp-json/wp/v2/posts?page=${page}`
    );
  }

  //mewtodo para dadp un id devolver el objeto noticia completo
  public getNoticebyid(id: number) {
    for (let i = 0; i < this.news.length; i++) {
      if (this.news[i].id === id) {
        console.log(this.news[i]);
        return this.news[i];
      }
    }
  }
  /**reduce o aumenta el tamano de la letra en pantalla de infonotice */
  public modificar(mod: boolean) {
    if (mod) {
      if (this.cont === 0) {

        this.remove_add_class('predeterminado', 'max-1');
        this.cont++;
        return;
      }
      if (this.cont === 1) {
        this.remove_add_class('max-1', 'max-2');
        this.cont++;
        return;
      }
      if (this.cont === 2) {
        this.remove_add_class('max-2', 'max-3');
        this.cont++;
    

        return;
      }

    } else {
      if (this.cont === 3) {
        this.remove_add_class('max-3', 'max-2');
        this.cont--;
        return;
      }
      if (this.cont === 2) {
        this.remove_add_class('max-2', 'max-1');
        this.cont--;
        return;
      }
      if (this.cont === 1) {
        this.remove_add_class('max-1', 'predeterminado');
        this.cont--;
        return;
      }
    }
  }

  private remove_add_class(class_to_remove: string, class_to_add: string) {
    this.textcontent.classList.remove(class_to_remove);
    this.textcontent.classList.add(class_to_add);
  }
}

