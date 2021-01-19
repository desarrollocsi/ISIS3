import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

import { IntermediaryService } from '../../../../core/services/intermediary.service';
import { HttpService } from '../../../../core/services/http.service';
import { StorageService } from '../../../../core/services/storage.service';


@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit {

  FormularioProgramacion:FormGroup;

  listaProgramaciones$:Observable<any[]>;

  constructor(private router:Router,
            private intermediaryService:IntermediaryService,
            private fb:FormBuilder,
            private httpService:HttpService,
            private storageService:StorageService,
              ) { }

  ngOnInit(): void {

    
    this.FormularioProgramacion = this.fb.group({
      fecha:[null],
    });
  }
  getSelectFecha(){
    this.listaProgramaciones$ = this.httpService.getListaProgramacion(this.FormularioProgramacion.value);  
  }
  onBuscarProgramacion(){

  }
  nuevaProgramacion(){

  }



}
