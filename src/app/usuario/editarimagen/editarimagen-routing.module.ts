import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarimagenPage } from './editarimagen.page';

const routes: Routes = [
  {
    path: '',
    component: EditarimagenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarimagenPageRoutingModule {}
