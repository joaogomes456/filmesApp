import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaexplosivatresPage } from './cargaexplosivatres.page';

const routes: Routes = [
  {
    path: '',
    component: CargaexplosivatresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaexplosivatresPageRoutingModule {}
