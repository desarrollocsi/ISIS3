import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../core/services/http.service';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css'],
})
export class ProgramacionComponent implements OnInit {
  FormularioProgramacion: FormGroup;
  listaProgramaciones$: Observable<any[]>;
  p: number = 1;
  constructor(private fb: FormBuilder, private httpService: HttpService) {}

  ngOnInit(): void {
    this.FormularioProgramacion = this.fb.group({
      fecha: [null],
    });
  }

  get fecha() {
    return this.FormularioProgramacion.get('fecha').value;
  }

  getSelectFecha() {
    this.listaProgramaciones$ = this.httpService.getListaProgramacion(
      this.fecha
    );
  }
}
