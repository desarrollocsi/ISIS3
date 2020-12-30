import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of,Observable } from 'rxjs'
import { map } from 'rxjs/operators';


import { environment } from '../../../environments/environment'
import { StorageService } from './storage.service'


@Injectable({providedIn: 'root'})

export class HttpService {

  constructor(private http:HttpClient,private storageService:StorageService) { }



getPacientesCitados(){
  return this.http.get(`${environment.APIURL}/auth/citas?fecha=2020-10-26&medico=022`)
}


getAntecedentes(){  
  return this.http.get(`${environment.APIURL}/auth/antecedentes`)
}


getAntFamiliares(){
  return of(this.storageService.getAntecedentes()).pipe(
    map(data => data.filter((x:any)=> x.tipo==='FAMILIARES')))
}

getAntPersonales(){
  return of(this.storageService.getAntecedentes()).pipe(
    map(data => data.filter((x:any)=> x.tipo !=='FAMILIARES')))
}



getCie(search:string):Observable<any[]>{
  if (search.length === 0) {
    return of([]);
  }
  return this.http.get<any[]>(`${environment.APIURL}/auth/cies?search=${search}`)
}


}
