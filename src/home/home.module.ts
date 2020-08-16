import { AppRoutingModule } from './../base/app-routing.module';
import { LeftsideblockModule } from './../leftsideblock/leftsideblock.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { EditorModule } from '../editor/editor.module';
import { CardsModule } from '../cards/cards.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    CardsModule,
    EditorModule,
    LeftsideblockModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }