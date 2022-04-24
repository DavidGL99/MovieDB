import { Component } from '@angular/core';
import { MovieService } from './movie.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieDB';
  constructor(

    private movieService: MovieService,
  ) {}

  getMovie(){
    console.log(this.movieService.getMovie().subscribe((data)=>{
      console.log(data);
    }))
  }
}
