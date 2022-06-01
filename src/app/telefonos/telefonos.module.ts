import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelefonosPageRoutingModule } from './telefonos-routing.module';

import { TelefonosPage } from './telefonos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelefonosPageRoutingModule
  ],
  declarations: [TelefonosPage]
})
export class TelefonosPageModule {}
