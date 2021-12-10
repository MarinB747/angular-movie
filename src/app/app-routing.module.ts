import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './views/movies/movies.component';
import { WishlistComponent } from './views/wishlist/wishlist.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';
import { ErrorComponent } from './views/error/error.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
