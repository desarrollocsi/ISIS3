import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup,FormArray } from '@angular/forms';
import { Observable,of } from 'rxjs';
import { debounceTime,distinctUntilChanged,switchMap } from 'rxjs/operators';


import { IntermediaryService } from '../../../../core/services/intermediary.service'
import { HttpService } from '../../../../core/services/http.service'
import { StorageService } from '../../../../core/services/storage.service'

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
  antecedentes:any;
  diagnosticos:any;
  diagnosticos$:Observable<any[]>;

  FormPartMed:FormGroup

  constructor(private router:Router,
              private intermediaryService:IntermediaryService,
              private fb:FormBuilder,
              private httpService:HttpService,
              private storageService:StorageService
               ) { }

  ngOnInit(): void {
    this.paciente$ = this.intermediaryService.data
    this.getAntecedentes()
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
      diagnosticos:this.fb.array([]),
      antecedentes:this.fb.array([])
    })
    this.antecedentes = this.FormPartMed.get('antecedentes') as FormArray;
    this.diagnosticos = this.FormPartMed.get('diagnosticos') as FormArray;
    this.antecedentes$ = of(this.storageService.getAntecedentes())
    this.getCie()
  }


  get cie(){
    return this.FormPartMed.get('cie').valueChanges
  }

 

  getAntecedentes(){
    if(!this.storageService.isAuthenticatedAnt()){
      this.httpService.getAntecedentes().subscribe(data=>this.storageService.setAntecedentes(data));
    }
  }

  getCie(){
    this.cies$ = this.cie.pipe(
              debounceTime(500),
              distinctUntilChanged(),
              switchMap((data:any)=>this.httpService.getCie(data))
              )
  }

  addBackground(){
    const group = this.fb.group({
      id:[null],
      descripcion:[null],
      valor:[null]
    })
  this.antecedentes.push(group) 
  }

  addCie(data:any){
    const group = this.fb.group({
      data
      // codigo:[null],
      // descripcion:[null],
      // tipo:[null]
    })
    this.diagnosticos.push(group)
    this.diagnosticos$ = of(this.FormPartMed.get('diagnosticos').value)
  }


onSubmit(){

    // this.router.navigate(['admision/citas/pacientescitados'])
    console.table(this.FormPartMed.value)
    
}





}
