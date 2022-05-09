import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  title = ""
  constructor( private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.title = params['title'];
        this.movieService.searchMovie(this.title).subscribe(data => console.log(data));
      }
    );
  }

}
