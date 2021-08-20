import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GijoeorigensPageRoutingModule } from './gijoeorigens-routing.module';

import { GijoeorigensPage } from './gijoeorigens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GijoeorigensPageRoutingModule
  ],
  declarations: [GijoeorigensPage]
})
export class GijoeorigensPageModule {}
