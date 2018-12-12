import { Component, OnInit } from '@angular/core';
import {TranslatorService} from '../services/translator.service';
import {three} from '../dictionaries/three';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  text = 'The Angular CLI makes it easy to create an application that already works, right out of the box.';
  private changeLang: Subscription;
  public source: string;
  private three: any;
  constructor(public ts: TranslatorService) {
    this.changeLang = ts.changeLang$.subscribe(data => {
      this.setSource(data.lang);
    });
    this.source = this.three[ts.currentLang];
  }

  ngOnInit() {
  }

  private setSource(lang: string) {
    this.source = three[lang];
  }
}
