import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CitasComponent } from './citas.component';
import { AgendamedicaComponent } from './agendamedica/agendamedica.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { PacientescitadosComponent } from './pacientescitados/pacientescitados.component'


@NgModule({
  declarations: [CitasComponent, AgendamedicaComponent, ProgramacionComponent, PacientescitadosComponent],
  imports: [
    CommonModule,
    CitasRoutingModule,
    ReactiveFormsModule
  ]
})
export class CitasModule { }
