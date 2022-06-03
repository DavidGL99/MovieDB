import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-in-theatres',
  templateUrl: './in-theatres.component.html',
  styleUrls: ['./in-theatres.component.css'],
})
export class InTheatresComponent implements OnInit {
  topImbd: any = [];
  titles = [];

  constructor(
    private route: Router,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getInTheatres();
  }

  getInTheatres(): void {
    this.movieService.getInTheatres().subscribe((topImbd) => {
      topImbd.forEach((movie: any) => {
        let current = {
          poster: movie.poster,
          id: movie.id,
        };
        this.topImbd.push(current);
      });
    });
  }

  clear() {
    this.topImbd = [];
  }

  goMovie(id: any) {
    this.route.navigateByUrl(`/movie?id=${id}`);
  }
}
