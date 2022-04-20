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

  onTyping(queryString: string): void{
    this.search = queryString;
  }

  searchMovies(): void{
    this.service.searchMovies(this.search, this.page).subscribe( (res: ResponseAPI) => {
      this.movies = res.results;
      this.pageCount = res.total_pages;
      this.moviesCount = res.total_results;
    });
  }

  nextPage(): void{
    this.page += 1;
    this.searchMovies();
    this.scrollToTop();
  }

  prevPage(): void{
    this.page -= 1;
    this.searchMovies();
    this.scrollToTop();
  }

  scrollToTop(): void{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
}
