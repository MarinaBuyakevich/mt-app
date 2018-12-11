import {RU} from '../dictionaries/ru';
import {EN} from '../dictionaries/en';
import {EventEmitter, Injectable} from '@angular/core';
import {config} from '../config';

@Injectable()
export class TranslatorService {
  public dictionary: {};
  public currentLang: string;
  public langList: any;
  public changeLang$ = new EventEmitter<{
    lang: string
  }>();
  constructor() {
    this.langList = config().app.lang_list;
    this.currentLang = config().app.default_lang;
  }
  public set(lang: string) {
    const setDictionary = {
      RU: () => {
        this.dictionary = RU;
        return true;
      },
      EN: () => {
        this.dictionary = EN;
        return true;
      }
    };
    if (!setDictionary[lang]()) {
      this.dictionary = config().app.default_lang;
    }
    this.currentLang = lang;
    this.changeLang$.emit({lang: lang});
  }
  public translate(key: string): string {
    const k = {
      key1: key.split('.')[0],
      key2: key.split('.')[1]} || null;
    return key && this.dictionary[k.key1][k.key2] ? this.dictionary[k.key1][k.key2] : '';
  }
}
