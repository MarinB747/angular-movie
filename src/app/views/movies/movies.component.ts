import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getMovies();
  }
  getMovies(): any {
    this.movies.length = 0;
    this.moviesService
      .getMovies()
      .subscribe((data: any) => this.movies.push(data.results));
    console.log(this.movies);
  }
  onNext() {
    if (this.moviesService.page === 50) {
      this.moviesService.page = 1;
    } else {
      this.moviesService.page = this.moviesService.page + 1;
    }
    this.router.navigate(['/movies'], {
      queryParams: { page: this.moviesService.page },
    });
    this.ngOnInit();
  }
  onPrev() {
    if (this.moviesService.page === 1) {
      this.moviesService.page = 50;
    } else {
      this.moviesService.page = this.moviesService.page - 1;
    }
    this.router.navigate(['/movies'], {
      queryParams: { page: this.moviesService.page },
    });
    this.ngOnInit();
  }
}
