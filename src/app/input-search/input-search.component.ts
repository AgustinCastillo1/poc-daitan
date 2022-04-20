import { Component, OnInit, Output, EventEmitter, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputSearchComponent implements OnInit {

  @HostBinding('class.app-input-search') hostClass = true;

  @Output() onTyping = new EventEmitter();
  search: string;

  constructor() { }

  emitEvent(): void{
    this.onTyping.emit(this.search);
  }

  ngOnInit(): void {
  }

}
