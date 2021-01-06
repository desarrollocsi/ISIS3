import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup,FormArray } from '@angular/forms';
import { Observable,of } from 'rxjs';
import { debounceTime,distinctUntilChanged,switchMap } from 'rxjs/operators';


import { IntermediaryService } from '../../../../core/services/intermediary.service'
import { HttpService } from '../../../../core/services/http.service'
import { StorageService } from '../../../../core/services/storage.service'


import { FormCie } from '../../../../core/models/form-cie.class'

@Component({
  selector: 'app-agendamedica',
  templateUrl: './agendamedica.component.html',
  styleUrls: ['./agendamedica.component.css']
})
export class AgendamedicaComponent implements OnInit {

  paciente$:Observable<any[]>;
  antFamiliares$:Observable<any[]>;
  antPersonales$:Observable<any[]>;
  cies$:Observable<any[]>;
  antecedentes$:Observable<any[]>;
  a$:Observable<any[]>;
  guard$:Observable<any[]>;
  antecedentes:any;
  diagnosticos:any;
  diagnosticos$:Observable<any[]>;
  FormPartMed:FormGroup
  p: number = 1;


  selectCie$:Observable<any[]>
  select=[]


  constructor(private router:Router,
              private intermediaryService:IntermediaryService,
              private fb:FormBuilder,
              private httpService:HttpService,
              private storageService:StorageService
               ) { }

  ngOnInit(): void {
    this.paciente$ = this.intermediaryService.data
    this.FormPartMed = this.fb.group({
      idcita:[null],
      motivo:[null],
      problema:[null],
      examen:[null],
      parterial:[null],
      fcardiaca:[null],
      frespiratoria:[null],
      tbucal:[null],
      taxilar:[null],
      peso:[null],
      talla:[null],
      icorporal:[null],
      pcefalico:[null],
      cie:[null],
      antecedentes:this.fb.array([]),
      diagnosticos:this.fb.array([])
    })
    this.getBackground()
    this.getCie()  
    this.antecedentes$ = of(this.storageService.getAntecedentes())
    this.antecedentes = this.FormPartMed.get('antecedentes') as FormArray;
    this.diagnosticos = this.FormPartMed.get('diagnosticos') as FormArray;
  }


  get cie(){
    return this.FormPartMed.get('cie').valueChanges
  }

  get f(){
    return this.FormPartMed.controls
  }


  getBackground(){
    if(!this.storageService.isAuthenticatedAnt()){
      this.httpService.getAntecedentes().subscribe(data=>this.storageService.setAntecedentes(data));
    }
  }

  getCie(){
    this.cies$ = this.cie.pipe(
              debounceTime(900),
              distinctUntilChanged(),
              switchMap((data:any)=>this.httpService.getCie(data))
              )
  }

  addBackground(){
    const group = this.fb.group({
      id:[null],
      valor:[null]
    })
  this.antecedentes.push(group) 
  }

  addCie(data:any){
    console.log(data)   
    this.select.push(data)
    const group = this.fb.group({
      id:[null],
      cie:[null],
      descripcion:[null]
    })    
    this.diagnosticos.push(group)   
    this.diagnosticos.setValue(this.select)
  }



onSubmit(){
  this.FormPartMed.controls.idcita.setValue('1000')
  console.log(this.FormPartMed.value)
  //this.guard$ = this.httpService.postRegister(this.FormPartMed.value)
}


}
