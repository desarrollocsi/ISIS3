import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class FormDynamicComponent implements OnInit, OnDestroy {
  datas$: Observable<DataDynamic>;
  route$: Observable<any>;

  form: FormGroup;
  formulario: any;
  p: number = 1;
  modal = false;
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

  onData(route: string) {
    this.modal = true;
    this.fds.getFormDynamic(route).subscribe((data: any) => {
      this.is.getFormDynamic(data);
    });
  }

  ngOnDestroy() {}
}
