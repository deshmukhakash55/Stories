import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'base/app-routing.module';

import { LeftsideblockSectionComponent } from './leftsideblock-section/leftsideblock-section.component';
import { LeftsideblockSectionMenuComponent } from './leftsideblock-section-menu/leftsideblock-section-menu.component';
import { LeftsideblockSectionListComponent } from './leftsideblock-section-list/leftsideblock-section-list.component';

@NgModule({
  declarations: [
      LeftsideblockSectionComponent,
      LeftsideblockSectionMenuComponent,
      LeftsideblockSectionListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [
    LeftsideblockSectionListComponent
  ]
})
export class LeftsideblockModule { }