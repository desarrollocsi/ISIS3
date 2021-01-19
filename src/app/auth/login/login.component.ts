import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service'
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


formLogin:FormGroup;

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private storageServicie:StorageService,
              private router:Router
              ) { }

  ngOnInit(): void {
    this.formLogin=this.fb.group({
      email:[null],
      password:[null]
    })
  }


  onSubmit(){
    this.authService.getLogin(this.formLogin.value).subscribe(data =>{
      this.correctLogin(data)
    })
  }

  private correctLogin(data:any){    
    this.storageServicie.setUser(data)
    this.router.navigate(['home'])
  }



}


