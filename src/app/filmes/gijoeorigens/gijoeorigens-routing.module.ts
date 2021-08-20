import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GijoeorigensPage } from './gijoeorigens.page';

const routes: Routes = [
  {
    path: '',
    component: GijoeorigensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GijoeorigensPageRoutingModule {}
