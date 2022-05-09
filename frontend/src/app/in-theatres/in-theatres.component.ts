import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieIMBD } from '../movieIMBD';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-in-theatres',
  templateUrl: './in-theatres.component.html',
  styleUrls: ['./in-theatres.component.css'],
})
export class InTheatresComponent implements OnInit {
  topImbd: MovieIMBD[] = [];
  titles = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getInTheatres();
  }

  getInTheatres(): void {
    this.movieService.getInTheatres().subscribe((topImbd) => {
      topImbd.forEach((movie: any) =>
        this.movieService
          .getinTheatreMovieByTitle(movie.title)
          .subscribe((res) => {
            let movie = {
              poster: res.Poster,
              title: res.Title,
              rating: -1,
              releaseYear: res.Year,
              id: res.imbdID,
            };
            this.topImbd.push(movie);
          })
      );
    });
  }

  clear() {
    this.topImbd = [];
  }
}
