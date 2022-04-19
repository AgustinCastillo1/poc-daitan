import { ResponseAPI } from './../../models/response.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  private baseUrl = "https://api.themoviedb.org/3/search/movie";

  constructor(private httpClient: HttpClient) { }

  searchMovies(search: string, page: number): Observable<ResponseAPI>{
    const params = new HttpParams()
      .set('api_key', 'feb6f0eeaa0a72662967d77079850353')
      .set('page', page.toString())
      .set('query', search);
    const url = `${this.baseUrl}?${params}`;
    return this.httpClient.get<ResponseAPI>(url);
  }
}
