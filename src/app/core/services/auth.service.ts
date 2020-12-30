import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs'

import { environment } from '../../../environments/environment'

import { StorageService } from './storage.service'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,
              private storageService:StorageService
              ) { }
  
  getLogin(data:any){
    return this.http.post(`${environment.APIURL}/auth/login`,data)
  }

  getMenu(){
    return of(this.storageService.getMenu())
  }

   


}
