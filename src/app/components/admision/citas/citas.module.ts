import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { CitasComponent } from './citas.component';
import { AgendamedicaComponent } from './agendamedica/agendamedica.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { PacientescitadosComponent } from './pacientescitados/pacientescitados.component';
import { ProgramacionCreateComponent } from './programacion-create/programacion-create.component'


@NgModule({
  declarations: [CitasComponent, AgendamedicaComponent, ProgramacionComponent, PacientescitadosComponent, ProgramacionCreateComponent],
  imports: [
    CommonModule,
    CitasRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class CitasModule { }
