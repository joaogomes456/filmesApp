import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatrulhacaninaOfilmePageRoutingModule } from './patrulhacanina-ofilme-routing.module';

import { PatrulhacaninaOfilmePage } from './patrulhacanina-ofilme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatrulhacaninaOfilmePageRoutingModule
  ],
  declarations: [PatrulhacaninaOfilmePage]
})
export class PatrulhacaninaOfilmePageModule {}
