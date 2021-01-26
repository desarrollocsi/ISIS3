import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { switchMap } from 'rxjs/operators';

import { FormDynamicService } from 'src/app/core/services/form-dynamic.service';
import { IntermediaryService } from 'src/app/core/services/intermediary.service';

@Component({
  selector: 'app-form-dynamic-modal',
  templateUrl: './form-dynamic-modal.component.html',
  styleUrls: ['./form-dynamic-modal.component.css'],
})
export class FormDynamicModalComponent implements OnInit {
  form: FormGroup;
  forms$: Observable<any>;
  response$: Observable<any>;
  formulario: any;
  title: string;

  @Input() isModePut: boolean;
  constructor(
    private fb: FormBuilder,
    private fds: FormDynamicService,
    private is: IntermediaryService
  ) {}

  ngOnInit(): void {
    this.onFormDynamic();
    this.form = this.fb.group({});
  }

  onFormDynamic() {
    console.log('Formdynamic');
    this.is.formDynamic.subscribe((data: any) => {
      if (data.length !== 0) {
        this.form = this.fds.formGroup(data);
      }
      this.formulario = data;
    });
  }

  onSubmit() {
    console.log('submit');
    const type = this.isModePut ? 'PUT' : 'POST';

    this.response$ = this.is.route.pipe(
      switchMap((route: string) =>
        this.fds.getDynamicApi(route, type, this.form.value)
      )
    );
  }
}
