import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelppagePageRoutingModule } from './helppage-routing.module';

import { HelppagePage } from './helppage.page';

import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelppagePageRoutingModule,
  ],
  declarations: [HelppagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelppagePageModule {}
