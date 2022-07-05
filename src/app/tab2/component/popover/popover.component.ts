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
export class PopoverComponent{
  public cont = 0

  @ViewChild('popover') popover: IonPopover;
  popoverIsOpen = false;
  
  @ViewChild('ionrange') ionrange: IonRange;
  constructor(private newservice: NewsService) {
  }

  changeFont(e: RangeCustomEvent) {
    console.log(this.ionrange);
    
    if (e.detail.value >= this.cont) {
      this.newservice.modificar(true)
      this.cont++;
    } else {
      this.newservice.modificar(false)
      this.cont--;
    } 
  }

  presentPopover(ev: any) {
    this.popover.event = ev;
    this.popoverIsOpen = true;
    console.log(this.ionrange);
  }

}

interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail;
  target: HTMLIonRangeElement;
}
