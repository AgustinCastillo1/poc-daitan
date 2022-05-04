import { Params, Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URIManageService {

  params: Params;
  uriParams: Params;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  setUrl(page: number,search: string ): void{
    if(search){
      this.params = {
        'search' : search,
        'page' : page
      }
      this.router.navigate([],{
        relativeTo: this.route,
        queryParams: this.params,
        queryParamsHandling: 'merge'
      });
    }
  }
}
