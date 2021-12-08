import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getMovies();
    console.log(this.movies);
  }
  getMovies(): any {
    this.moviesService
      .getMovies()
      .subscribe((data: any) => this.movies.push(data.results));
  }
}
