import { NavModule } from '../nav/nav.module';
import { HomeModule } from '../home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CardsModule } from '../cards/cards.module';
import { EditorModule } from '../editor/editor.module';
import { BaseComponent } from './base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardsModule,
    EditorModule,
    HomeModule,
    NavModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class BaseModule { }
