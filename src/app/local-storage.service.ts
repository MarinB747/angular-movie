import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  list: any[] = [];
  setWishlist(data: any) {
    this.list = this.list || [];
    this.list.push(data);
    localStorage.setItem('Wishlist', JSON.stringify(this.list));
  }
  getWishlist() {
    let data: any = localStorage.getItem('Wishlist');
    this.list = JSON.parse(data);
  }
  removeFromWishlist(movie: any) {
    this.list.splice(this.list.map((e) => e[0].id).indexOf(movie[0].id), 1);
    localStorage.setItem('Wishlist', JSON.stringify(this.list));
  }
  constructor() {}
}
