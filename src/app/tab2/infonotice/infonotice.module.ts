import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfonoticePageRoutingModule } from './infonotice-routing.module';

import { InfonoticePage } from './infonotice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfonoticePageRoutingModule
  ],
  declarations: [InfonoticePage]
})
export class InfonoticePageModule {}
