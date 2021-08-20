import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamuraixAorigemPageRoutingModule } from './samuraix-aorigem-routing.module';

import { SamuraixAorigemPage } from './samuraix-aorigem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamuraixAorigemPageRoutingModule
  ],
  declarations: [SamuraixAorigemPage]
})
export class SamuraixAorigemPageModule {}
