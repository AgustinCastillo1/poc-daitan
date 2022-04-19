import { Component, Input, OnInit, Output, EventEmitter, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaginationComponent implements OnInit {

  @HostBinding('class.app-pagination') hostClass = true;

  @Input() page: number;
  @Input() pageCount: number;
  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();
  @Output() paginate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  nextPage(){
    this.next.emit();
  }

  prevPage(){
    this.prev.emit();
  }

  paginateSearch(page){
    this.paginate.emit(page);
  }

}
