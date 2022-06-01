import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { NoticeComponent } from '../app/component/notice/notice/notice.component';
import { EventComponent } from '../app/component/notice/event/event.component';
import { InvestigationComponent } from '../app/component/notice/investigation/investigation.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page,NoticeComponent,EventComponent,InvestigationComponent]
})
export class Tab2PageModule {}
