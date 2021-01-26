import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { FormDynamicService } from '../../../core/services/form-dynamic.service';
import { IntermediaryService } from '../../../core/services/intermediary.service';

import { DataDynamic } from '../../../core/models/data-dynamic.interface';

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.css'],
})
export class FormDynamicComponent implements OnInit {
  datas$: Observable<DataDynamic>;
  route$: Observable<any>;
  response$: Observable<any>;

  form: FormGroup;

  p: number = 1;
  modal = false;
  isModePut = false;
  constructor(
    private fds: FormDynamicService,
    private is: IntermediaryService
  ) {}

  ngOnInit(): void {
    this.route$ = this.is.route;
    this.getApiDynamic();
  }

  getApiDynamic() {
    this.datas$ = this.is.route.pipe(
      switchMap((data: string) => this.fds.getDynamicApi(data))
    );
  }

  onDelete(data: object) {
    // this.datas$ = this.is.route.pipe(
    //   switchMap((url: string) => this.fds.getDynamicApi(url, 'DELETE', data))
    // );
  }

  onFormDynamic(route: string, data: object) {
    this.isModePut = data ? true : false;
    this.modal = true;
    const edit = data !== undefined ? true : false;
    this.is.subjectData({ data, edit });
    this.fds.getFormDynamic(route).subscribe((formDynamic: any) => {
      this.is.subjectFormDynamic(formDynamic);
    });
  }
}
