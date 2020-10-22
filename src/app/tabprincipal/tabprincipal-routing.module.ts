import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabprincipalPage } from './tabprincipal.page';
 
    const routes: Routes = [
      {
        path: '',
        component: TabprincipalPage,
        children: [
          {
            path: 'litarol',
            children: [
              {
                path: '',
                loadChildren: () => import('../usuario/listarol/listarol.module').then(m => m.ListarolPageModule)
              }
            ]
          },
          {
            path: 'listausuario',
            children: [
              {
                path: '',
                loadChildren: () => import('../usuario/lista/lista.module').then(m => m.ListaPageModule)
              }
            ]
          } 
          
        ]
      },
      {
        path: '',
        redirectTo: '/tabprincipal/litarol',
        pathMatch: 'full'
      }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabprincipalPageRoutingModule {}
