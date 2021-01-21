import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { Page404Component } from './page404/page404.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormDynamicModalComponent } from './form-dynamic-modal/form-dynamic-modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    Page404Component,
    FormDynamicComponent,
    FormDynamicModalComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class HomeModule {}
