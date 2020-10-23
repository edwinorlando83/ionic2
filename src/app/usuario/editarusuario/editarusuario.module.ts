import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarusuarioPageRoutingModule } from './editarusuario-routing.module';

import { EditarusuarioPage } from './editarusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarusuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarusuarioPage]
})
export class EditarusuarioPageModule {}
