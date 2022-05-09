import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';
import { MovieIMBD } from '../movieIMBD';
@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css'],
})
export class TopMoviesComponent implements OnInit {
  topImbd: MovieIMBD[] = [];
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTopIMBD();
  }

  getTopIMBD(): void {
    this.movieService
      .getTopMoviesIMBD()
      .subscribe((topImbd) => (this.topImbd = topImbd));
  }

  clear() {
    this.topImbd = [];
  }
}
