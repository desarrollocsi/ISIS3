import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({providedIn: 'root'})

export class HttpService {

  constructor(private http:HttpClient) { }



getPacientesCitados(){
  return this.http.get(`${environment.APIURL}/auth/citas?fecha=2020-10-26&medico=022`)
}


}
