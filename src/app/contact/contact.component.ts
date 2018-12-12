import { Component, OnInit } from '@angular/core';
import {TranslatorService} from '../services/translator.service';
import {contact} from '../dictionaries/contact';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private changeLang: Subscription;
  public source: string;

  constructor(public ts: TranslatorService) {
    this.changeLang = ts.changeLang$.subscribe(data => {
      this.setSource(data.lang);
    });
    this.source = contact[ts.currentLang];
  }

  ngOnInit() {
  }

  private setSource(lang: string) {
    this.source = contact[lang];
  }
}
