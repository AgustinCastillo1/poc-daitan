import { Component, Input, OnInit, Output, EventEmitter, HostBinding, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaginationComponent implements OnInit, OnChanges {

  @HostBinding('class.app-pagination') hostClass = true;

  @Input() page: number;
  @Input() pageCount: number;
  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();
  @Output() paginate = new EventEmitter();
  pagesArray: number[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.pageCount){
      this.buildPaginationArray();
    }
  }

  ngOnInit(): void {
  }

  buildPaginationArray(){
    console.log('Called');
    this.pagesArray = [];
    for(let i=0;i<this.pageCount;i++){
      this.pagesArray.push(i+1);
    }
  }

  nextPage(): void{
    this.next.emit();
  }

  prevPage(): void{
    this.prev.emit();
  }
}
