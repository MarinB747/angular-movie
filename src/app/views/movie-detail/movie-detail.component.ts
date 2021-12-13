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
  btnTxt = 'Add to Wishlist';
  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): any {
    this.movie.length = 0;
    const id: any = this.route.snapshot.paramMap.get('id');
    this.moviesService
      .getSingleMovie(id)
      .subscribe((data: any) => this.movie.push(data));
  }
  addToWishlist() {
    this.localStorage.setWishlist(this.movie);
  }
}
