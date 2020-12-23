import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { AuthService } from '../../../../core/services/auth.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menus$: Observable<any>

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.menus$ = this.authService.getMenu();
  }

}
