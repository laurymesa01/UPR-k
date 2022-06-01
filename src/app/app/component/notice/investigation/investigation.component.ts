import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.scss'],
})
export class InvestigationComponent implements OnInit {
  public investigations:any[][]
  constructor(private newservice:NewsService) { }

  ngOnInit() {

  }

}
