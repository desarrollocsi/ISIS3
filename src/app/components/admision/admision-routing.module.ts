import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'citas',
        loadChildren: () =>
          import('./citas/citas.module').then((m) => m.CitasModule),
      },
      {
        path: 'pacientes',
        loadChildren: () =>
          import('./pacientes/pacientes-routing.module').then(
            (m) => m.PacientesRoutingModule
          ),
      },
      {
        path: 'ficheros',
        loadChildren: () =>
          import('./ficheros/ficheros.module').then((m) => m.FicherosModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmisionRoutingModule {}
