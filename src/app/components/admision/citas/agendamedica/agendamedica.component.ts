import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { IntermediaryService } from '../../../../core/services/intermediary.service'

@Component({
  selector: 'app-agendamedica',
  templateUrl: './agendamedica.component.html',
  styleUrls: ['./agendamedica.component.css']
})
export class AgendamedicaComponent implements OnInit {

  paciente$:Observable<any[]>;
  FormPartMed:FormGroup

  constructor(private router:Router,
              private intermediaryService:IntermediaryService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    this.paciente$ = this.intermediaryService.data
    this.FormPartMed = this.fb.group({
      motivo:[null],
      enfermedad:[null],
      examen:[null],
      presion:[null],
      cardiaca:[null],
      respiratoria:[null],
      bucal:[null],
      axilar:[null],
      peso:[null],
      talla:[null],
      masa:[null],
      perim:[null],
    })
  }






  onSave(){
    // this.router.navigate(['admision/citas/pacientescitados'])
    console.table(this.FormPartMed.value)
  }





}
