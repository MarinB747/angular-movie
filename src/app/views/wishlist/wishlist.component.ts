import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishlist = [];
  constructor(private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorage.getWishlist();
  }
}
