import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarimagenPageRoutingModule } from './editarimagen-routing.module';

import { EditarimagenPage } from './editarimagen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarimagenPageRoutingModule
  ],
  declarations: [EditarimagenPage]
})
export class EditarimagenPageModule {}
