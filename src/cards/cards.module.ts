import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardComponent } from './card/card.component';
import { CardOptionsComponent } from './card-options/card-options.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { CardCommentsModalComponent } from './card-comments-modal/card-comments-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalsModule } from 'modals/modals.module';
import { PostModule } from 'post/post.module';
import { CardsContentComponent } from './cards-content/cards-content.component';



@NgModule({
  declarations: [
    CardsListComponent,
    CardComponent,
    CardOptionsComponent,
    CardActionsComponent,
    CardCommentsModalComponent,
    CardsContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ModalsModule,
    PostModule
  ],
  exports: [
    CardsContentComponent,
    CardComponent
  ],
  entryComponents: [
    CardCommentsModalComponent
  ]
})
export class CardsModule { }
