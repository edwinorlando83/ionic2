import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarolPage } from './listarol.page';

const routes: Routes = [
  {
    path: '',
    component: ListarolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarolPageRoutingModule {}
