import { ChangeDetectionStrategy, ViewChild } from '@angular/core';
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

  /**
   * al iniciar la pagina convierte el id que viene por la url en un entero,
   * llama al metodo de obtener la noticia por id
   * y se captura el texto para cuando se vaya a aumentar y disminuir la letra
   */
  ngOnInit() {
    this.id = parseInt(this.activaterouter.snapshot.paramMap.get("id"))

    this.notice = this.newservise.getNoticebyid(this.id);

    this.newservise.textcontent = document.querySelector('.div-text')
  }



}
