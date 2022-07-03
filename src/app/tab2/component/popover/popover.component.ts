import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {

  constructor(private newservice: NewsService) {}

  maxfont() {
    this.newservice.modificar(true)

  }
  minfont() {
    this.newservice.modificar(false)
    console.log(121212);


  }
}
