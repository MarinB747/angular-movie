import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  btnTxt = 'Submit';

  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm.patchValue({ username: this.cookieService.get('User') });
    this.loginForm.patchValue({ password: this.cookieService.get('Password') });
  }

  onSubmit() {
    const username = this.loginForm.get('username')!.value;
    const password = this.loginForm.get('password')!.value;
    this.cookieService.set('User', username);
    this.cookieService.set('Pass', password);
    this.router.navigate(['/movies']);
  }
}
