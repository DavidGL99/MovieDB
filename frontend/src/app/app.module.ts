import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InTheatresComponent } from './in-theatres/in-theatres.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    InTheatresComponent,
    TopMoviesComponent,
    NavbarComponent,
    SearchMovieComponent,
    HomeComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

