import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmisionRoutingModule } from './admision-routing.module';
import { HomeModule } from '../../shared/components/home.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdmisionRoutingModule, HomeModule],
})
export class AdmisionModule {}
