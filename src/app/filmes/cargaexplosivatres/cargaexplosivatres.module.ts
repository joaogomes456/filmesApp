import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaexplosivatresPageRoutingModule } from './cargaexplosivatres-routing.module';

import { CargaexplosivatresPage } from './cargaexplosivatres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaexplosivatresPageRoutingModule
  ],
  declarations: [CargaexplosivatresPage]
})
export class CargaexplosivatresPageModule {}
