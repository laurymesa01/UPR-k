import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelefonosPage } from './telefonos.page';

const routes: Routes = [
  {
    path: '',
    component: TelefonosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelefonosPageRoutingModule {}
