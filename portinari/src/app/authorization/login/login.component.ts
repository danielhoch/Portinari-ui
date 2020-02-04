import { Component, OnInit } from '@angular/core';
import { PoPageLoginLiterals } from '@portinari/portinari-templates';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customLiterals: PoPageLoginLiterals;
  login: string;

  constructor() { }

  ngOnInit() {
  }

  loginSubmit(credenciais) {

    console.log(credenciais);
  }
}
