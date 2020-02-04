import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PoPageLoginLiterals, PoPageLogin } from '@portinari/portinari-templates';

import { AuthService } from './../auth.service';
import { UsuarioDTO } from './../../models/usuario.dto';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customLiterals: PoPageLoginLiterals;
  usuario: UsuarioDTO = new UsuarioDTO();

  constructor(private autService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginSubmit(formData: PoPageLogin) {

    this.usuario.nome = formData.login;
    this.usuario.senha = formData.password;
    this.autService.fazerLogin(this.usuario);
  }
}
