import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarusuarioPageRoutingModule } from './agregarusuario-routing.module';

import { AgregarusuarioPage } from './agregarusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarusuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarusuarioPage]
})
export class AgregarusuarioPageModule {}
