import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  getMovies(page: number): Observable<any> {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=f032274d9c9fd3adb40ade7cdc65485b&language=en-US&page=${page}`
      )
      .pipe(delay(1000));
  }
  getSingleMovie(movieId: any) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=f032274d9c9fd3adb40ade7cdc65485b&language=en-US`
    );
  }
  constructor(private http: HttpClient) {}
}
