import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishlist = this.localStorage.list;
  btnTxt = 'Details';
  constructor(private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorage.getWishlist();
  }
}
