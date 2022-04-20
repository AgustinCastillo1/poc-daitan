import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.app-header') hostClass = true;

  @Input() logo: string;
  @Input() auxiliarLogo: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
    this.logo = `../../assets/img/${this.logo}`;
    this.auxiliarLogo = `../../assets/img/${this.auxiliarLogo}`;
  }

}
