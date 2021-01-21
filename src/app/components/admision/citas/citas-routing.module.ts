import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasComponent } from './citas.component';
import { AgendamedicaComponent } from './agendamedica/agendamedica.component';
import { PacientescitadosComponent } from './pacientescitados/pacientescitados.component';
import { ProgramacionComponent } from './programacion/programacion.component';

import { Page404Component } from '../../../shared/components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: CitasComponent,
    children: [
      { path: 'programacion', component: ProgramacionComponent },
      { path: 'agendamedica', component: PacientescitadosComponent },
      { path: 'actomedico', component: AgendamedicaComponent },
      { path: '', redirectTo: 'agendamedica', pathMatch: 'full' },
      { path: '**', component: Page404Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasRoutingModule {}
