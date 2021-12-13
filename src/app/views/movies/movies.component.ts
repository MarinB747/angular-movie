import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  details = 'Details';
  prev = 'Previous';
  next = 'Next';
  wishlistToggle = false;
  page: number = 1;

  constructor(
    private localStorage: LocalStorageService,
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getMovies();
  }
  getMovies(): any {
    this.movies.length = 0;
    const id: any = this.route.snapshot.queryParams['page'];
    this.moviesService
      .getMovies(id)
      .subscribe((data: any) => this.movies.push(data.results));
  }
  onNext() {
    if (this.page === 50) {
      this.page = 1;
    } else {
      this.page = this.page + 1;
    }
    this.router.navigate(['/movies'], {
      queryParams: { page: this.page },
    });
    this.ngOnInit();
  }
  onPrev() {
    if (this.page === 1) {
      this.page = 50;
    } else {
      this.page = this.page - 1;
    }
    this.router.navigate(['/movies'], {
      queryParams: { page: this.page },
    });
    this.ngOnInit();
  }
  checkWishlist(movieId: any) {
    if (this.localStorage.list.some((e) => e[0].id === movieId))
      return (this.wishlistToggle = true);
    else return (this.wishlistToggle = false);
  }
}
