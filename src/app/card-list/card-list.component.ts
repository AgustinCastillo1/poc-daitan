import { Movie } from './../../models/movie.model';
import { MoviesServiceService } from './../services/movies-service.service';
import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardListComponent implements OnInit {

  @HostBinding('class.app-card-list') hostClass = true;

  @Input() movies: Movie[];
  query: string;

  constructor(private service: MoviesServiceService) { }

  ngOnInit(): void {

  }
}
