import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { NoticeComponent } from './component/notice/notice.component';
import { PopoverComponent } from './component/popover/popover.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShareModule,
   
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, NoticeComponent, PopoverComponent]
})
export class Tab2PageModule {}
