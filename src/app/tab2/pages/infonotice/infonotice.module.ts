import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfonoticePageRoutingModule } from './infonotice-routing.module';

import { InfonoticePage } from './infonotice.page';
import { PopoverComponent } from '../../component/popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfonoticePageRoutingModule
  ],
  declarations: [InfonoticePage,PopoverComponent]
})
export class InfonoticePageModule {}
