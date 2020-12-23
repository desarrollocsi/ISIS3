import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  setUser(data:any){
    localStorage.setItem('MENU',JSON.stringify(data.menu))
  }



  getMenu(){
    return JSON.parse(localStorage.getItem('MENU'))
  }

}
