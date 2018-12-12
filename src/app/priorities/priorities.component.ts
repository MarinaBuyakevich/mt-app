import { Component, OnInit } from '@angular/core';
import {TranslatorService} from '../services/translator.service';
import {priorities} from '../dictionaries/priorities';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.css']
})
export class PrioritiesComponent implements OnInit {
  private changeLang: Subscription;
  public source: any;
  private priorities: any;
  constructor(public ts: TranslatorService) {
    this.changeLang = ts.changeLang$.subscribe(data => {
      this.setSource(data.lang);
    });
    this.source = this.priorities[ts.currentLang];
  }

  ngOnInit() {
  }

  private setSource(lang: string) {
    this.source = priorities[lang];
  }
}
