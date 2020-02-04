import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
             ) : Observable<boolean> | boolean {

      console.log('AuthGuard');

      return this.verificarAcesso();
  }

  private verificarAcesso() {
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }
    this.router.navigate(['/login']);
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log('canLoad: Verifica se o usuário pode carregar o código do módulo');
    return this.verificarAcesso();
  }
}
