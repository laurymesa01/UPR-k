import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Notice } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';
import { PopoverComponent } from '../../component/popover/popover.component';


@Component({
  selector: 'app-infonotice',
  templateUrl: './infonotice.page.html',
  styleUrls: ['./infonotice.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfonoticePage implements OnInit {
  private id: number
  private notice: Notice


  constructor(private activaterouter: ActivatedRoute,
    private newservise: NewsService,
    public popoverController: PopoverController,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.id = parseInt(this.activaterouter.snapshot.paramMap.get("id"))

    this.notice = this.newservise.getNoticebyid(this.id);

    this.newservise.textcontent = document.querySelector('.div-text')
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      mode: "ios"

    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
