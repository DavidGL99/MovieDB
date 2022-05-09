import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private movieURL = 'http://www.omdbapi.com/?apikey=fe569e';  // URL to web api
  private backendURL = 'http://localhost:8080/api';
  constructor(
    private http: HttpClient,
  ) { }


  getMovieByTitle(title : String) : Observable<any> {
    return this.http.get(`${this.movieURL}&t=${title.split(' ').join('%20')}`)
  }

  getinTheatreMovieByTitle(title : String) : Observable<any> {
    return this.http.get(`${this.movieURL}&t=${title.split(' ').join('%20')}`)
  }

  getTopMoviesIMBD() : Observable<any> {
    return this.http.get(`${this.backendURL}/top`)
  }

  getInTheatres() : Observable<any> {
    return this.http.get(`${this.backendURL}/inTheatres`)
  }
  searchMovie(title : String) : Observable<any> {
    return this.http.get(`${this.movieURL}&s=${title.split(' ').join('%20')}`)
  }
}
