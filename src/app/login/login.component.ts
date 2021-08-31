import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mensagemSucesso:string;
  username:string;
  password:string;
  loginError:boolean;
  cadastrando:boolean;
  erro:string;
  errors:string[];


  constructor(
    private router: Router
  ) { }

  onSubmit() {
    this.router.navigate(['/home']);
  }

  preparaCadastrar() {
    this.cadastrando = true;
  }

  cancelaCadastro() {

  }

  cadastrar() {
    
  }

  
  

}
