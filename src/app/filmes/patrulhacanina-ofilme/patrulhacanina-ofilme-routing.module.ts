import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatrulhacaninaOfilmePage } from './patrulhacanina-ofilme.page';

const routes: Routes = [
  {
    path: '',
    component: PatrulhacaninaOfilmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatrulhacaninaOfilmePageRoutingModule {}
