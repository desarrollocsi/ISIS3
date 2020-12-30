import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime,distinctUntilChanged } from 'rxjs/operators';


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
      cie:[null],
      antecedentes:this.fb.array([])
    })
    
  
    this.antFamiliares$ = this.httpService.getAntFamiliares()
    this.antPersonales$ = this.httpService.getAntPersonales()
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
    this.cie.pipe(debounceTime(800),distinctUntilChanged()).subscribe((data:string)=>{
      this.searchCie(data)
    })     
  }


searchCie(data:string){
  this.cies$ = this.httpService.getCie(data)
}






onSubmit(){

    // this.router.navigate(['admision/citas/pacientescitados'])
    console.table(this.FormPartMed.value)
    
}





}
