import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

import { HttpService } from '../../../../core/services/http.service'
import { IntermediaryService } from '../../../../core/services/intermediary.service'

@Component({
  selector: 'app-pacientescitados',
  templateUrl: './pacientescitados.component.html',
  styleUrls: ['./pacientescitados.component.css']
})
export class PacientescitadosComponent implements OnInit {

  datosPacienes$:Observable<any>;

  constructor(private router:Router,
              private httpService:HttpService,
              private intermediaryService:IntermediaryService
              ) { }

  ngOnInit(): void {
    this.datosPacienes$ = this.httpService.getPacientesCitados();
  }



  onData(data:any){
    this.intermediaryService.getDatosPacientes(data)
    this.router.navigate(['admision/citas/agendamedica'])
  }









}
