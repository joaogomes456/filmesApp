import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'gijoeorigens',
    loadChildren: () => import('./filmes/gijoeorigens/gijoeorigens.module').then( m => m.GijoeorigensPageModule)
  },
  {
    path: 'patrulhacanina-ofilme',
    loadChildren: () => import('./filmes/patrulhacanina-ofilme/patrulhacanina-ofilme.module').then( m => m.PatrulhacaninaOfilmePageModule)
  },
  {
    path: 'samuraix-aorigem',
    loadChildren: () => import('./filmes/samuraix-aorigem/samuraix-aorigem.module').then( m => m.SamuraixAorigemPageModule)
  },
  {
    path: 'cargaexplosivatres',
    loadChildren: () => import('./filmes/cargaexplosivatres/cargaexplosivatres.module').then( m => m.CargaexplosivatresPageModule)
  },
  {
    path: 'stillwater',
    loadChildren: () => import('./filmes/stillwater/stillwater.module').then( m => m.StillwaterPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
