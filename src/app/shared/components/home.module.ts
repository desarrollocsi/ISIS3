import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { Page404Component } from './page404/page404.component';



@NgModule({
  declarations: [HomeComponent, SidebarComponent, NavbarComponent, Page404Component],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
