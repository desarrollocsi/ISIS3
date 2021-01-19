import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-programacion-create',
  templateUrl: './programacion-create.component.html',
  styleUrls: ['./programacion-create.component.css']
})
export class ProgramacionCreateComponent implements OnInit {
  
  FormularioCrud:FormGroup;

  constructor(private fb:FormBuilder,) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
