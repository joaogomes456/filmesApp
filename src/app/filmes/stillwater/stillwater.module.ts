import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StillwaterPageRoutingModule } from './stillwater-routing.module';

import { StillwaterPage } from './stillwater.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StillwaterPageRoutingModule
  ],
  declarations: [StillwaterPage]
})
export class StillwaterPageModule {}
