import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { HomeModule } from '../../shared/components/home.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    HomeModule
  ]
})
export class SeguridadModule { }
