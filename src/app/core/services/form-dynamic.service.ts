import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { of } from 'rxjs';

import { FormBase } from '../helps/form-base.class';
import { DataDynamic } from '../models/data-dynamic.interface';

@Injectable({
  providedIn: 'root',
})
export class FormDynamicService {
  id: string;

  constructor(private http: HttpClient) {}

  getFormDynamic(ruta: string) {
    let id = '';
    switch (ruta) {
      case 'especialidades': {
        id = '1';
        break;
      }
      case 'medicos': {
        id = '4';
        break;
      }
      case 'turnos': {
        id = '1';
        break;
      }
      case 'roles': {
        id = '3';
        break;
      }
    }
    return this.http.get(`http://192.168.10.144:8001/formulario/${id}`);
  }

  formGroup(form: FormBase<string>[]) {
    const group: any = {};
    form.map((form) => {
      group[form.key] = new FormControl(form.value || null);
    });
    return new FormGroup(group);
  }

  getDynamicApi(url?: string, type?: string, data?: any) {
    if (url.length > 0) {
      switch (type) {
        case 'POST': {
          return this.http.post(`http://192.168.10.144:8001/${url}/`, data);
        }

        case 'PUT': {
          return this.http.put(`http://192.168.10.144:8001/${url}`, data);
        }

        case 'DELETE': {
          return this.http.delete(`http://192.168.10.144:8001/${url}`, data);
        }

        default: {
          return this.http.get<DataDynamic[]>(
            `http://192.168.10.144:8001/${url}`
          );
        }
      }
    }

    return of(url);
  }

  getURL(url: string) {
    const data = url.toString().split('/');
    return data[3];
  }
}
