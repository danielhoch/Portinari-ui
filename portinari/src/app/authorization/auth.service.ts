import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioDTO } from './../models/usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {

  }

  fazerLogin(usuario: UsuarioDTO) {

    console.log(usuario);

    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
   return this.usuarioAutenticado;
  }
}
