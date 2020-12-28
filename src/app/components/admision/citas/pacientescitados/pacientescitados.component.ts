import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientescitados',
  templateUrl: './pacientescitados.component.html',
  styleUrls: ['./pacientescitados.component.css']
})
export class PacientescitadosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }


  acto(){
    this.router.navigate(['admision/citas/agendamedica'])
  }


}
