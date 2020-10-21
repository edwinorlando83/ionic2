import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabprincipalPage } from './tabprincipal.page';
 
    const routes: Routes = [
      {
        path: '',
        component: TabprincipalPage,
        children: [
          {
            path: 'home',
            children: [
              {
                path: '',
                loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
              }
            ]
          },
          {
            path: 'registro',
            children: [
              {
                path: '',
                loadChildren: () => import('../usuario/registro/registro.module').then(m => m.RegistroPageModule)
              }
            ]
          } 
          ,
          {
            path: 'editarperfil',
            children: [
              {
                path: '',
                loadChildren: () => import('../usuario/editarperfil/editarperfil.module').then(m => m.EditarperfilPageModule)
              }
            ]
          } 
        ]
      },
      {
        path: '',
        redirectTo: '/tabprincipal/home',
        pathMatch: 'full'
      }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabprincipalPageRoutingModule {}
