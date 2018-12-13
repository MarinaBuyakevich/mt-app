import { Component, OnInit } from '@angular/core';
import {TranslatorService} from '../services/translator.service';
import {Footer} from '../dictionaries/footer';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private changeLang: Subscription;
  public source: string;
  constructor(public ts: TranslatorService) {
    this.changeLang = ts.changeLang$.subscribe(data => {
      this.setSource(data.lang);
    });
    this.source = Footer[this.ts.currentLang];
  }

  ngOnInit() {
  }

  private setSource(lang: string) {
    this.source = Footer[lang];
  }
}
