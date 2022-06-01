import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
 public response: Notice[][] = []
  constructor(private newservice:NewsService) { }

  ngOnInit() {
    this.response=this.newservice.events
    
  }

}
