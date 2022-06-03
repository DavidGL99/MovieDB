import { ThisReceiver } from '@angular/compiler';
import {
  Component,
  Inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Review } from '../review';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  id = '';
  movie: any = {};
  reviews : Review[] = []
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => (this.id = params['id']));

    this.movieService.getMovieById(this.id).subscribe((data) => {
      this.movie = data;
    });

    this.getReviews(this.id)
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: this.id,
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

  getReviews(id : String) {
    this.movieService.getReviews(id).subscribe(data => {
      this.reviews = data;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../reviewForm.html',
})
export class DialogOverviewExampleDialog {
  form: FormGroup;
  bodyReview = ''
  headline = ''
  id = '';
  review : Review = {
    body: undefined,
    movieID: undefined,
    score: undefined,
    headline: undefined
  }
  constructor(
    private route: ActivatedRoute,
    private service: MovieService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.id = data.id
    this.form = this.fb.group({
      rating: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitReview(): void {
    if (this.bodyReview != '') {

      if (!this.form.value.rating) {
        this.review.score= 0;
      } else {
        this.review.score = this.form.value.rating
      }


      this.review.body = this.bodyReview
      this.review.movieID = this.id
      this.review.headline = this.headline

      this.service.submitReview(this.review);
    }

    this.onNoClick();
  }

  setId(id: string) {
    this.id = id;
  }
}
