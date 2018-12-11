import { Component, OnInit } from '@angular/core';
import {TranslatorService} from '../services/translator.service';

@Component({
  selector: 'app-major-priorities',
  templateUrl: './major-priorities.component.html',
  styleUrls: ['./major-priorities.component.css']
})
export class MajorPrioritiesComponent implements OnInit {
  public move: boolean;
  public langList: any;
  public activeLang: string;
  constructor(public ts: TranslatorService) {
    this.move = false;
    this.langList = ts.langList;
    this.activeLang = 'EN';
  }

  ngOnInit(): void {
  }

  setLang(ev: Event, lang: string) {
    ev.preventDefault();
    this.activeLang = lang;
    this.ts.set(this.activeLang);
  }
}

