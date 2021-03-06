import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../movie-detail/movie-detail.component';
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
    private location: Location,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.movies = []
    this.route.queryParams.subscribe(
      (params) => (this.title = params['title'])
    );

    if(this.title!=undefined){
    this.movieService.searchMovie(this.title).subscribe((data) => {
      data.Search.forEach((movie: any) => {
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

  openDialog(id : any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: id,
      width: '800px',
      height: '600px',
    };
    const dialogRef = this.dialog.open(
      DialogOverviewExampleDialog,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
