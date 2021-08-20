import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StillwaterPage } from './stillwater.page';

const routes: Routes = [
  {
    path: '',
    component: StillwaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StillwaterPageRoutingModule {}
