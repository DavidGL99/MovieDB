import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopMoviesComponent } from './top-movies/top-movies.component';
import { AppComponent } from './app.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { InTheatresComponent } from './in-theatres/in-theatres.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchMovieComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
