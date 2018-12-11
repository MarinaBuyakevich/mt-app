import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentnameComponent } from './componentname/componentname.component';
import { ThreeComponent } from './three/three.component';
import { MenuComponent } from './menu/menu.component';
import { MajorPrioritiesComponent } from './major-priorities/major-priorities.component';
import { PrioritiesComponent } from './priorities/priorities.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { TranslatorService } from './services/translator.service';
@NgModule({
  declarations: [
    AppComponent,
    ComponentnameComponent,
    ThreeComponent,
    MenuComponent,
    MajorPrioritiesComponent,
    PrioritiesComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TranslatorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


