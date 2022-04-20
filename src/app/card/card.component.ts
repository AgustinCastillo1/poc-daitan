import { Movie } from './../../models/movie.model';
import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {

  @HostBinding('class.app-card') hostClass = true;

  @Input() movie: Movie;
  movieImage: string;

  constructor() { }

  ngOnInit(): void {
    if(this.movie.poster_path){
      this.movieImage = `https://image.tmdb.org/t/p/w400${this.movie.poster_path}`;
    } else {
      this.movieImage = '../../assets/img/defaultMovie.png';
    }
  }

}
