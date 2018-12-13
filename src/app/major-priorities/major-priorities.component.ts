import { Component, OnInit } from '@angular/core';
import {TranslatorService} from '../services/translator.service';
import {MPriorities} from '../dictionaries/major-priorities';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-major-priorities',
  templateUrl: './major-priorities.component.html',
  styleUrls: ['./major-priorities.component.css']
})
export class MajorPrioritiesComponent implements OnInit {
  private changeLang: Subscription;
  public langList: any;
  public activeLang: string;
  public source: any;
  constructor(public ts: TranslatorService) {
    this.changeLang = ts.changeLang$.subscribe(data => {
      this.setSource(data.lang);
    });
    this.source = MPriorities[this.ts.currentLang];
  }

  ngOnInit() {
  }

  // public setSource(lang: string) {
  //   this.source = MPriorities[lang];
  // }

  setLang(ev: Event, lang: string) {
    ev.preventDefault();
    this.activeLang = lang;
    this.ts.set(this.activeLang);
  }
  setSource(lang: string) {
    this.source = MPriorities[lang];
  }
}


