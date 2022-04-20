import { Component, OnInit, Output, EventEmitter, Input, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button-search',
  templateUrl: './button-search.component.html',
  styleUrls: ['./button-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonSearchComponent implements OnInit {

  @HostBinding('class.app-button-search') hostClass = true;
  @HostBinding('class.-pagination') @Input() isPagination: boolean = false;

  @Output() clicked = new EventEmitter();
  @Input() page: number;
  @Input() pageCount: number;
  @Input() isDisabled: boolean;

  constructor() { }

  onCLick(): void{
    this.clicked.emit();
  }

  ngOnInit(): void {
  }

}
