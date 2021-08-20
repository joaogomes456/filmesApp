import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamuraixAorigemPage } from './samuraix-aorigem.page';

const routes: Routes = [
  {
    path: '',
    component: SamuraixAorigemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamuraixAorigemPageRoutingModule {}
