import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../../core/services/auth.service';
import { IntermediaryService } from '../../../../core/services/intermediary.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menus$: Observable<any>;

  constructor(
    private authService: AuthService,
    private is: IntermediaryService
  ) {}

  ngOnInit(): void {
    this.menus$ = this.authService.getMenu();
  }

  onRoute(ruta: string) {
    const a = ruta.toString().split('/');
    console.log(ruta);
    this.is.subjectRoute(a[3]);
  }
}
