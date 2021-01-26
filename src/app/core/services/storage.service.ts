import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setUser(data: any) {
    localStorage.setItem('TOKEN', data.token);
    localStorage.setItem('MENU', JSON.stringify(data.menu));
    localStorage.setItem('USER', JSON.stringify(data.usuario.name));
  }

  setAntecedentes(data: any) {
    if (data.length > 0) {
      localStorage.setItem('ANT', JSON.stringify(data));
    }
  }

  getAntecedentes() {
    return JSON.parse(localStorage.getItem('ANT'));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('USER'));
  }

  getMenu() {
    return JSON.parse(localStorage.getItem('MENU'));
  }

  getToken() {
    return localStorage.getItem('TOKEN');
  }

  isAuthenticatedAnt() {
    const ant = this.getAntecedentes();
    return ant === null ? false : true;
  }
}
