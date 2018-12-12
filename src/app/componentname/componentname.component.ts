import { Component, OnInit } from '@angular/core';
import {TranslatorService} from '../services/translator.service';
import {componentname} from '../dictionaries/componentname';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-componentname',
  templateUrl: './componentname.component.html',
  styleUrls: ['./componentname.component.css']
})
export class ComponentnameComponent implements OnInit {
  private changeLang: Subscription;
  public source: any;
  private componentname: any;
  constructor(public ts: TranslatorService) {
    this.changeLang = ts.changeLang$.subscribe(data => {
      this.setSource(data.lang);
    });
    this.source = this.componentname[ts.currentLang];
  }

  ngOnInit() {
  }

  private setSource(lang: string) {
    this.source = componentname[lang];
  }
}
