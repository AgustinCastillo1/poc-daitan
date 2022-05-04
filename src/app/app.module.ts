import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { ButtonSearchComponent } from './button-search/button-search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSearchComponent,
    CardListComponent,
    CardComponent,
    ButtonSearchComponent,
    PaginationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
