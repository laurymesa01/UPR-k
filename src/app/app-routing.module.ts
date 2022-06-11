
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },{
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./notas/notas.module').then( m => m.NotasPageModule)
  },
  ,{
    path: 'infonotice/:id',
    loadChildren: () => import('./tab2/pages/infonotice/infonotice.module').then( m => m.InfonoticePageModule)
  }, {
    path: 'telefonos',
    loadChildren: () => import('./telefonos/telefonos.module').then( m => m.TelefonosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
