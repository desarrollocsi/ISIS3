import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  setUser(data:any){
    localStorage.setItem('TOKEN',data.token)
    localStorage.setItem('MENU',JSON.stringify(data.menu))
  }


  getMenu(){
    return JSON.parse(localStorage.getItem('MENU'))
  }


  getToken(){
    return localStorage.getItem('TOKEN');
  }


  setAntecedentes(data:any){
    if (data.length > 0 ){
      localStorage.setItem('ANT',JSON.stringify(data))
    }
  }

  getAntecedentes(){
    return JSON.parse(localStorage.getItem('ANT'))
  }

  isAuthenticatedAnt(){
    const ant =  this.getAntecedentes()
    return ant === null? false:true;
  }


}
