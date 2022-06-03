import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Review } from './review';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private movieURL = 'http://www.omdbapi.com/?apikey=fe569e'; // URL to web api
  private backendURL = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  getMovieByTitle(title: String): Observable<any> {
    return this.http.get(`${this.movieURL}&t=${title.split(' ').join('%20')}`);
  }

  getMovieById(id: String): Observable<any> {
    return this.http.get(`${this.movieURL}&i=${id}&plot=full`);
  }

  getTopMoviesIMBD(): Observable<any> {
    return this.http.get(`${this.backendURL}/top`);
  }

  getInTheatres(): Observable<any> {
    return this.http.get(`${this.backendURL}/inTheatres`);
  }
  searchMovie(title: String): Observable<any> {
    return this.http.get(`${this.movieURL}&s=${title.split(' ').join('%20')}`);
  }
  submitReview(review : Review) {
    this.http.post<Review>(`${this.backendURL}/reviews`, review, this.httpOptions).subscribe();
  }

  getReviews(id : String){
    return this.http.get<Review[]>(`${this.backendURL}/reviews/${id}`, this.httpOptions)
  }
}
