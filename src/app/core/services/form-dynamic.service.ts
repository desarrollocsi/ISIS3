import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

import { of } from 'rxjs';
import { take, filter, map } from 'rxjs/operators';

import { DataDynamic } from '../models/data-dynamic.interface';
import { StorageService } from '../../core/services/storage.service';
import { IntermediaryService } from './intermediary.service';

@Injectable({
  providedIn: 'root',
})
export class FormDynamicService {
  id: string;

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private is: IntermediaryService
  ) {}

  getFormDynamic(ruta: string) {
    let id = '';
    switch (ruta) {
      case 'especialidades': {
        id = '1';
        break;
      }
      case 'turnos': {
        id = '6';
        break;
      }
      case 'consultorios': {
        id = '7';
        break;
      }
      case 'medicos': {
        id = '4';
        break;
      }
    }
    return this.http.get(`http://192.168.10.144:8001/formulario/${id}`);
  }

  formGroup(form: any) {
    const group: any = {};
    const user = this.storageService.getUser();

    form.formulariod.map((form: any) => {
      const value = form.label === 'usuario' ? user : form.value;
      group[form.key] = new FormControl(value);
    });

    form = new FormGroup(group);

    this.is.getData
      .pipe(
        take(1),
        filter((value: any) => value.edit),
        map((value: any) => value.data)
      )
      .subscribe((value: any) => {
        form.setValue(value);
      });

    return form;
  }

  getDynamicApi(url?: string, type?: string, data?: any) {
    console.log('service getdynamicapi');
    if (url.length > 0) {
      switch (type) {
        case 'GET': {
          return this.http.get(
            `http://192.168.10.144:8001/${url}/${data}`,
            data
          );
        }
        case 'POST': {
          return this.http.post(`http://192.168.10.144:8001/${url}/`, data);
        }

        case 'PUT': {
          return this.http.put(
            `http://192.168.10.144:8001/${url}/${data.codigo}`,
            data
          );
        }

        case 'DELETE': {
          return this.http.delete(
            `http://192.168.10.144:8001/${url}/${data.codigo}`,
            data
          );
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
