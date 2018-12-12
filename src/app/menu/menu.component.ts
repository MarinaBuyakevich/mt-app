import { Component, OnInit } from '@angular/core';
import {TranslatorService} from '../services/translator.service';
import {config} from '../config';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // private changeLang: Subscription;
  // public source: any;
  // private menu: any;
  public menuLinks: any;
  public activeLink: string;
  public config: any;
  constructor(public ts: TranslatorService) {
    this.menuLinks = [];
    this.menuLinks.push('home');
    this.menuLinks.push('priorities');
    this.menuLinks.push('techniques');
    this.menuLinks.push('contact');
    this.activeLink = this.menuLinks[0];
    this.config = config().app;
}
  select (ev: Event, ln: string) {
    ev.preventDefault();
    setTimeout(() => {
      const target = document.getElementById(ln);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 30);
    this.activeLink = ln;
  }

  ngOnInit(): void {
  }
}
