import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  firstButton = 'Movies'
  secondButton = 'Wishlist'
  thirdButton = 'Logout'
  constructor() { }

  ngOnInit(): void {
  }

}
