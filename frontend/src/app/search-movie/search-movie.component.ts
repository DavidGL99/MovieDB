import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent implements OnInit {
  title = '';
  movies: any = [];
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.movies = []
    this.route.queryParams.subscribe(
      (params) => (this.title = params['title'])
    );

    if(this.title!=undefined){
    this.movieService.searchMovie(this.title).subscribe((data) => {
      data.Search.forEach((movie: any) => {
        console.log(movie)
        this.movies.push(movie);
      });
    });
  }
  }

  isValid(movies: any){
    return typeof movies !== 'undefined' && movies != 0;
  }

  goMovie(id : any){
    this.router.navigateByUrl(`/movie?id=${id}`);
  }


}
