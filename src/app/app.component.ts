import { ResponseAPI } from './../models/response.model';
import { Movie } from './../models/movie.model';
import { MoviesServiceService } from './services/movies-service.service';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-daitan';
  search: string;
  page: number = 1;
  movies: Movie[] = [];
  pageCount: number;
  moviesCount: number;

  constructor(private service: MoviesServiceService) { }

  onTyping(queryString){
    this.search = queryString;
  }

  searchMovies(){
    this.page = 1;
    this.service.searchMovies(this.search, this.page).subscribe( (res: ResponseAPI) => {
      this.movies = res.results;
      this.pageCount = res.total_pages;
      this.moviesCount = res.total_results;
    });
  }

  nextPage(){
    this.page += 1;
    this.service.searchMovies(this.search, this.page).subscribe( (res: ResponseAPI) => {
      this.movies = res.results;
      this.pageCount = res.total_pages;
      this.moviesCount = res.total_results;
    });
  }

  prevPage(){
    this.page -= 1;
    this.service.searchMovies(this.search, this.page).subscribe( (res: ResponseAPI) => {
      this.movies = res.results;
      this.pageCount = res.total_pages;
      this.moviesCount = res.total_results;
    });
  }

  searchPage(page){
    console.log(page);
  }
}
