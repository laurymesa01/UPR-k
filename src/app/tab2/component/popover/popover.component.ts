import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RangeChangeEventDetail, RangeValue } from '@ionic/core';
import { NewsService } from 'src/app/services/news.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent  {
   public cont=0

  constructor(private newservice: NewsService) {
    
   }


  changeFont(e: RangeCustomEvent) {
    
    if (e.detail.value >= this.cont) {
      this.maxFont();
        this.cont++;
  

      
  
    } else {
      this.minFont();
      this.cont--;
}
  

    
  }
  maxFont() {
this.newservice.modificar(true)
 
 }
  minFont() {
   this.newservice.modificar(false)
 
   
    
  }

}

interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail;
  target: HTMLIonRangeElement;
}
