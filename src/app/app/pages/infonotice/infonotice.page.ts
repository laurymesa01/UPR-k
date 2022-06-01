import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infonotice',
  templateUrl: './infonotice.page.html',
  styleUrls: ['./infonotice.page.scss'],
})
export class InfonoticePage implements OnInit {
private id:any
  constructor(private activaterouter:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activaterouter.snapshot.paramMap.get("id")
    console.log(this.id);
    
  }

}
