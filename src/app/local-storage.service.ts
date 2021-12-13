import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  list: any[] = [];
  setWishlist(data: any) {
    this.list.push(data);
    localStorage.setItem('Wishlist', JSON.stringify(this.list));
  }
  getWishlist() {
    let data: any = localStorage.getItem('Wishlist');
    this.list = JSON.parse(data);
  }
  removeFromWishlist(movie: any) {
    this.list.splice(this.list.indexOf(movie), 1);
    localStorage.setItem('Wishlist', JSON.stringify(this.list));
  }
  constructor() {}
}
