import { ActivatedRoute } from '@angular/router';
import { URIManageService } from './services/urimanage.service';
import { ResponseAPI } from './../models/response.model';
import { Movie } from './../models/movie.model';
import { MoviesServiceService } from './services/movies-service.service';
import { Component, Output } from '@angular/core';
import { filter, take } from 'rxjs/operators';

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

  constructor(
    private service: MoviesServiceService,
    private uriManager: URIManageService,
    private route: ActivatedRoute,
  ) { }

  onTyping(queryString: string): void{
    this.search = queryString;
  }

  searchMovies(): void{
    this.uriManager.setUrl(this.page, this.search);
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

  ngOnInit(): void{
    this.route.queryParams
    .pipe(filter( params => !!Object.keys(params).length), take(1))
    .subscribe( (res) => {
      console.log('Called');
      this.page = parseInt(res.page);
      this.search = res.search;
      this.searchMovies();
    });
  }
}
