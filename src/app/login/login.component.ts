import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigService } from '../config/config.service';
import {Router} from '@angular/router';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl(''),
  });
  constructor(private loginService: ConfigService, private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    // TODO: Use EventEmitter with form value
    let data = this.profileForm.value;
    this.loginService.login(data).subscribe((response:any) => {
      console.log(response)
      if(response.token){
        sessionStorage.setItem('sessionToken', response.token);
        this.router.navigate(['home']);
        Notify.success('Sesión iniciada');
      }
    },err=>{
        Notify.failure('Usuario / password incorrectos');
    });
  }

  get inputEmail() {
    return this.profileForm.get('email');
  }

  validaCompletos() {
    // TODO: Use EventEmitter with form value
    let data = this.profileForm.value;
    if(data.email != '' && data.password != ''){
      return false;
    }
    return true;
  }
  

}
