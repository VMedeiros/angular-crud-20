import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  //formulário e elementos
  loginForm: FormGroup

  constructor(
    private router: Router
  ) { }

  //função que inicia o componente
  ngOnInit() {
    this.formComponent();
  }

  //função que define o formulário 
  formComponent() {
    this.loginForm = new FormGroup({
      username: new FormControl((''), [Validators.required]),
      password: new FormControl((''), [Validators.required]),
    })
  }

  //função que chama a rota para home
  fazerLogin() {
    this.router.navigate(['home/card']);
  }

}
