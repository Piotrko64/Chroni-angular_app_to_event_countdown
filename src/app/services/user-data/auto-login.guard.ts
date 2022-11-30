import { findSessionIdCookie } from 'src/app/utils/cookies/findSessionIdCookie';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root',
})
export class AutoLoginGuard implements CanActivate {
  constructor(
    private auth: UserDataService,
    private router: Router,
    private userData: UserDataService
  ) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (findSessionIdCookie()) {
      this.userData.autoLogin();
      return true;
    } else {
      return false;
    }
  }
}
