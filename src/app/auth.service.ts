import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(private cookieService: CookieService, public router: Router) {}
  canActivate(): boolean {
    if (
      this.cookieService.get('User') !== '' ||
      this.cookieService.get('Password') !== ''
    ) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
