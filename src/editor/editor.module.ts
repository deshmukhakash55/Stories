import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ModalsModule } from '../modals/modals.module';
import { CardsModule } from '../cards/cards.module';
import { PreviewsModule } from '../previews/previews.module';
import { EditorButtonComponent } from './editor-button/editor-button.component';
import { EditorInputComponent } from './editor-input/editor-input.component';
import { EditorModalComponent } from './editor-modal/editor-modal.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { EditorCardPreviewComponent } from './editor-card-preview/editor-card-preview.component';

@NgModule({
  declarations: [EditorButtonComponent, EditorInputComponent, EditorModalComponent, SafeHtmlPipe, EditorCardPreviewComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    ModalsModule,
    CardsModule,
    PreviewsModule
  ],
  exports: [
    EditorButtonComponent,
    EditorModalComponent
  ],
  entryComponents: [
    EditorModalComponent
  ]
})
export class EditorModule { }
