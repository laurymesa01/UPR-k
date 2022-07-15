import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IonPopover, IonRange } from '@ionic/angular';
import { RangeChangeEventDetail, RangeValue } from '@ionic/core';
import { NewsService } from 'src/app/services/news.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {
  public cont = 0

  @ViewChild('popover') popover: IonPopover;
  popoverIsOpen = false;


  constructor(private newservice: NewsService) {
  }
  /**
   * accede al valor value del evento y si es mayor igual al contador inicializado en cero
   * llama al metodo del servicio que modifica la letra y le pasa true como parametro y aumenta el contador
   * sino le pasa false para disminuir y disminuye el contador 
   * @param e evento capturado para poder acceder a las propiedades de este detail.value
   */
  changeFont(e: RangeCustomEvent) {


    if (e.detail.value >= this.cont) {
      this.newservice.modificar(true)
      this.cont++;
    } else {
      this.newservice.modificar(false)
      this.cont--;
    }
  }
  /**
   * abre el popover
   * @param ev evento del popover
   */
  presentPopover(ev: any) {
    this.popover.event = ev;
    this.popoverIsOpen = true;

  }

}

interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail;
  target: HTMLIonRangeElement;
}
