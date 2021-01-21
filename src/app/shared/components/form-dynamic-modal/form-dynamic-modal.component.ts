import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private fds: FormDynamicService,
    private is: IntermediaryService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
    this.onFormDynamic();
  }

  onFormDynamic() {
    this.is.formDynamic.subscribe((data: any) => {
      if (data.length !== 0) {
        this.form = this.fds.formGroup(data.formulariod);
      }
      this.formulario = data;
    });
  }

  onSubmit() {
    this.response$ = this.is.route.pipe(
      switchMap((route: string) =>
        this.fds.getDynamicApi(route, 'POST', this.form.value)
      )
    );
  }
}
