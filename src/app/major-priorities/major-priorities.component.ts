import {Component, OnInit} from '@angular/core';
import {TranslatorService} from '../services/translator.service';
import {trigger} from '@angular/animations';
import {Subscription} from 'rxjs';
import {MPriorities} from '../dictionaries/major-priorities';
import {config} from '../config';

@Component({
  selector: 'app-major-priorities',
  templateUrl: './major-priorities.component.html',
  styleUrls: ['./major-priorities.component.css'],
  styles: [``],
  animations: [
    trigger('mat-checkbox', [

    ]),
  ]
})
export class MajorPrioritiesComponent implements OnInit {
  public langList: any;
  public activeLang: string;
  public startFrame: boolean;
  public source: any;
  private changeLang = Subscription;


  constructor(
    public ts: TranslatorService) {
    this.startFrame = true;
    this.langList = config().app.lang_list;
    this.langList = ts.langList;
    this.activeLang = 'EN';
    this.changeLang = ts.changeLang$.subscribe(data => {
      this.setSource(data['lang']);
    });
    this.source = MPriorities[this.ts.currentLang];
  }

  ngOnInit() {
    const startFrame = document.getElementById('start-frame');
    if (startFrame.clientHeight !== window.innerHeight) {
      startFrame.style.height = window.innerHeight + 'px';
    }
  }

  setLang(ev: Event, lang: string) {
    ev.preventDefault();
    this.activeLang = lang;
    this.ts.set(this.activeLang);
  }
  setSource(lang: string) {
    this.source = MPriorities[lang];
  }
  // ngAfterViewChecked() {
  //   const startFrame = document.getElementById('start-frame');
  //   if (startFrame.clientHeight !== window.innerHeight) {
  //     startFrame.style.height = window.innerHeight + 'px';
  //   }
  // }
}


