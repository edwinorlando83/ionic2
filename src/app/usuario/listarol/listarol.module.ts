import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarolPageRoutingModule } from './listarol-routing.module';

import { ListarolPage } from './listarol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarolPageRoutingModule
  ],
  declarations: [ListarolPage]
})
export class ListarolPageModule {}
