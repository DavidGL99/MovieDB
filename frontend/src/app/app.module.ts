import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InTheatresComponent } from './in-theatres/in-theatres.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    InTheatresComponent,
    TopMoviesComponent,
    MovieSearchComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

