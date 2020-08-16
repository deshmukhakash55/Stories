import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PreviewCardComponent } from './preview-card/preview-card.component';
import { PreviewCardActionsComponent } from './preview-card-actions/preview-card-actions.component';
import { PreviewCardOptionsComponent } from './preview-card-options/preview-card-options.component';



@NgModule({
  declarations: [PreviewCardComponent, PreviewCardActionsComponent, PreviewCardOptionsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    PreviewCardComponent
  ]
})
export class PreviewsModule { }
