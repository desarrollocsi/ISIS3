import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IntermediaryService {

  private paciente = new BehaviorSubject<any>([]);
  data = this.paciente.asObservable();


  constructor() { }


  getDatosPacientes(data:any){
    this.paciente.next(data)
  }


}
