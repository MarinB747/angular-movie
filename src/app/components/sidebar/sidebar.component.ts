import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  firstButton = 'Movies';
  secondButton = 'Wishlist';
  thirdButton = 'Logout';
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {}

  onLogout() {
    this.cookieService.delete('User');
    this.cookieService.delete('Pass');
  }
}
