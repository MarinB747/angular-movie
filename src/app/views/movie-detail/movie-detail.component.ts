import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}
  movie: any = [];
  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): any {
    this.movie.length = 0;
    const id: any = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.moviesService
      .getSingleMovie(id)
      .subscribe((data: any) => this.movie.push(data));

    console.log(this.movie);
  }
}
