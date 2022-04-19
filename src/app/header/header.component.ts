import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() logo: string;
  @Input() auxiliarLogo: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
    this.logo = `../../assets/img/${this.logo}`;
    this.auxiliarLogo = `../../assets/img/${this.auxiliarLogo}`;
  }

}
