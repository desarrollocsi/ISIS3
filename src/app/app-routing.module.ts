import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './shared/components/page404/page404.component'

const routes: Routes = [
  {
    path: '',
    loadChildren:()=>import('./auth/login.module').then(m=>m.LoginModule)
  },
  {
    path:'home',
    loadChildren:()=>import('./shared/components/home.module').then(m=>m.HomeModule)
  },
  {
    path:'admision',
    loadChildren:()=>import('./components/admision/admision.module').then(m=>m.AdmisionModule)
  },
  {
    path:'seguridad',
    loadChildren:()=>import('./components/seguridad/seguridad.module').then(m=>m.SeguridadModule)
  },
  {
    path:'**',component:Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
