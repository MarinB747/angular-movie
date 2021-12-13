import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { LocalStorageService } from './local-storage.service';
@Component({
  selector: 'app-root',
  animations: [
    trigger('openCloseSidebar', [
      transition(':enter', [
        style({ opacity: 0, zIndex: 25 }),
        animate('1s ease-out', style({ opacity: 1, zIndex: 25 })),
      ]),
      transition(':leave', [
        style({ opacity: 1, zIndex: 25 }),
        animate('1s ease-in', style({ opacity: 0, zIndex: 25 })),
      ]),
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gauss-movie';
  toggleSidebar: boolean = false;
  setSidebar(event: boolean) {
    this.toggleSidebar = event;
  }
  ngOnInit(): void {
    this.localStorage.getWishlist();
  }
  constructor(private localStorage: LocalStorageService) {}
}
