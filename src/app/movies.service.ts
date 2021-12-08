import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  configUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=f032274d9c9fd3adb40ade7cdc65485b&language=en-US&page=1`;
  getMovies(): Observable<any> {
    return this.http.get(this.configUrl);
  }
  constructor(private http: HttpClient) {}
}
