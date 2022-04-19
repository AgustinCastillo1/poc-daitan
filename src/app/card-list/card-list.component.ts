import { Movie } from './../../models/movie.model';
import { MoviesServiceService } from './../services/movies-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() movies: Movie[];
  query: string;

  constructor(private service: MoviesServiceService) { }

  ngOnInit(): void {

  }
}
