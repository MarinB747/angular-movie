import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() username = '';
  @Input() password = '';
  btnTxt = 'Submit';

  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    this.username = this.cookieService.get('User');
    this.username = this.cookieService.get('Password');
  }
  onSubmit() {
    this.cookieService.set('User', this.username);
    this.cookieService.set('Pass', this.password);
    this.router.navigate(['/movies']);
  }
}
