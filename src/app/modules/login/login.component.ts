import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  };
  mensagemErro: string = '';

  constructor(private loginService: LoginService, private roteador: Router) { }

  ngOnInit(): void {
  }

  handleLogin(formLogin: NgForm) {
    this.mensagemErro = '';
    if (formLogin.valid) {
      this.loginService
        .logar(this.login)
        .subscribe(
          ()	=>	{
            this.roteador.navigate(['inbox']);
          },
          (responseError: HttpErrorResponse) => {
            this.mensagemErro = responseError.error
          });
    }
  }

}
