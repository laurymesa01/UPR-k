import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notice } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-infonotice',
  templateUrl: './infonotice.page.html',
  styleUrls: ['./infonotice.page.scss'],
})
export class InfonoticePage implements OnInit {
  private id: number
  private notice:Notice
  
  constructor(private activaterouter:ActivatedRoute, private newservise:NewsService) { }

  ngOnInit() {
    this.id = parseInt(this.activaterouter.snapshot.paramMap.get("id"))

   
    this.notice= this.newservise.getNoticebyid(this.id);
  
    
  }

}
