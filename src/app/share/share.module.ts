import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance/maintenance.component';



@NgModule({
  declarations: [
    MaintenanceComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MaintenanceComponent,
  ]
})
export class ShareModule { }
