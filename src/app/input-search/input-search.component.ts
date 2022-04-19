import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  @Output() onTyping = new EventEmitter();
  search: string;

  constructor() { }

  emitEvent(){
    this.onTyping.emit(this.search);
  }

  ngOnInit(): void {
  }

}
