import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntermediaryService {
  private paciente = new BehaviorSubject<any>([]);
  data = this.paciente.asObservable();

  private router = new BehaviorSubject<any>([]);
  route = this.router.asObservable();

  private fd = new BehaviorSubject<any>([]);
  formDynamic = this.fd.asObservable();

  constructor() {}

  getDatosPacientes(data: any) {
    this.paciente.next(data);
  }

  getRoute(route: any) {
    this.router.next(route);
  }

  getFormDynamic(formDynamic: any) {
    this.fd.next(formDynamic);
  }
}
