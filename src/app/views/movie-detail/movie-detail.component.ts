import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private localStorage: LocalStorageService
  ) {}
  movie: any = [];
  checkWishlist = true;
  btnTxt = 'Add to Wishlist';
  btnTxt2 = 'Remove from Wishlist';
  ngOnInit(): void {
    this.getMovie();
    this.searchWishlist();
  }

  getMovie(): any {
    this.movie.length = 0;
    const id: any = this.route.snapshot.paramMap.get('id');
    this.moviesService
      .getSingleMovie(id)
      .subscribe((data: any) => this.movie.push(data));
  }
  addToWishlist() {
    this.checkWishlist ? this.firstCaseWishlist() : this.secondCaseWishlist();
    this.checkWishlist = !this.checkWishlist;
  }
  searchWishlist() {
    const id: any = Number(this.route.snapshot.paramMap.get('id'));
    if (this.localStorage.list.some((e) => e[0].id === id))
      return (
        (this.checkWishlist = !this.checkWishlist), (this.btnTxt = this.btnTxt2)
      );
    else return (this.checkWishlist = this.checkWishlist);
  }
  firstCaseWishlist() {
    this.localStorage.setWishlist(this.movie);
    this.btnTxt = 'Remove from Wishlist';
  }
  secondCaseWishlist() {
    this.localStorage.removeFromWishlist(this.movie);
    this.btnTxt = 'Add to Wishlist';
  }
}
