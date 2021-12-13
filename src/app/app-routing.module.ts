import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './views/movies/movies.component';
import { WishlistComponent } from './views/wishlist/wishlist.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';
import { ErrorComponent } from './views/error/error.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './auth.service';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'movies', component: MoviesComponent, canActivate: [AuthService] },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [AuthService],
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent,
    canActivate: [AuthService],
  },
  { path: '**', component: ErrorComponent, canActivate: [AuthService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
