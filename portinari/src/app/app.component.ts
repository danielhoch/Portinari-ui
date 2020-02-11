import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';

import { AuthService } from './authorization/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Configurações', action: this.onClick2.bind(this) }
  ];

  mostrarMenu = false;

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(arg => this.mostrarMenu = arg);
  }

  private onClick() {
    this.router.navigate(['/home']);
  }

  private onClick2() {
    this.router.navigate(['/configuracoes']);
  }

  sair(): void {
    this.router.navigate(['/login']);
  }

}
