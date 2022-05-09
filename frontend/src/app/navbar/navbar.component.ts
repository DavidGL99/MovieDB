import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title = ''
  constructor(
    private route: Router,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  search(movie:String) {
    this.route.navigateByUrl(`/search?title=${this.title}`);
    this.title = ""
  }
}
