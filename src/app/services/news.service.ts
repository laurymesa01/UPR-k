import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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
  /**
   * dado el numero de la pagina devuelve la respuesta correspondiente a esa pagina
   * @param page numero de pagina
   * @returns la respuesta de diez elementos de esa pagina
   */
  getNews(page: number = 0): Observable<Notice[]> {
    return this.http.get<Notice[]>(
      `${environment.noticiasUrl}/wp-json/wp/v2/posts?page=${page}`
    );
  }

  /**
   * recorre el arreglo de noticias y busca la que 
   * tenga el mismo id que se le pasa como parametro
   * @param id id de la noticia a buscar
   * @returns la noticia
   */
  public getNoticebyid(id: number) {
    for (let i = 0; i < this.news.length; i++) {
      if (this.news[i].id === id) {
        console.log(this.news[i]);
        return this.news[i];
      }
    }
  }
  /**
   * comprueba el valor del parametro mod ,en dependencia
   *  del valor aumenta el contador o lo disminuye
   * @param mod parametro booleano si es true se 
   * aumenta la letra si es false se disminuye
   * @returns 
   */
  public modificar(mod: boolean) {
    if (mod) {
      if (this.cont === 0) {
        this.removeAddClass('predeterminado', 'max-1');
        this.cont++;
        return;
      }
      if (this.cont === 1) {
        this.removeAddClass('max-1', 'max-2');
        this.cont++;
        return;
      }
      if (this.cont === 2) {
        this.removeAddClass('max-2', 'max-3');
        this.cont++;
        return;
      }

    } else {
      if (this.cont === 3) {
        this.removeAddClass('max-3', 'max-2');
        this.cont--;
        return;
      }
      if (this.cont === 2) {
        this.removeAddClass('max-2', 'max-1');
        this.cont--;
        return;
      }
      if (this.cont === 1) {
        this.removeAddClass('max-1', 'predeterminado');
        this.cont--;
        return;
      }
    }
  }
  /**
   * utilizando el textcontent que es el texto el cual se le va a modificar la letra 
   * se remueve de su lista de clases el string de partametro y se adiciona a esta el string de parametro
   * @param class_to_remove clase para remover
   * @param class_to_add clase para adicionar
   */
  private removeAddClass(class_to_remove: string, class_to_add: string) {
    this.textcontent.classList.remove(class_to_remove);
    this.textcontent.classList.add(class_to_add);
  }
}

