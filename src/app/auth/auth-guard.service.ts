import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private localStorage: LocalStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let exp = this.localStorage.getUserObject().exp;
    let token = this.localStorage.getUserObject().exp;
    if(token){
      if(!this.tokenExpired(exp))
      {
        return true;
      }
    }
    this.router.navigate(['/auth/login']);
    return false;
  }

  private tokenExpired(exp): boolean
  {
    return Math.floor(new Date().getTime() / 1000) >= exp;
  }
}
