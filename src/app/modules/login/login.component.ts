import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private httpClient: HttpClient, private roteador: Router) { }

  ngOnInit(): void {
  }

  handleLogin(formLogin: NgForm) {
    this.mensagemErro = '';
    if (formLogin.valid) {
      this.httpClient
        .post('http://localhost:3200/login', this.login)
        .subscribe(
          ((response:	any)	=>	{
            localStorage.setItem('cmail-token',response.token);
            this.roteador.navigate(['inbox']);
          }),
          (responseError: HttpErrorResponse) => {
            this.mensagemErro = responseError.error
          }

        )
    }
  }

}
