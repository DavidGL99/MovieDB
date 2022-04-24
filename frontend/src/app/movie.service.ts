import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieURL = 'http://www.omdbapi.com/?apikey=fe569e';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }


  getMovie() : Observable<any> {
    let movieTitle = "cars"
    return this.http.get(`${this.movieURL}&t=${movieTitle}`)
  }

  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      // if not search term, return empty movie array.
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.movieURL}&s=${term}`)
  }
}
