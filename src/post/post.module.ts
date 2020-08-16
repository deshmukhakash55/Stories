import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsModule } from '../modals/modals.module';
import { PostOverlayComponent } from './post-overlay/post-overlay.component';
import { PostDetailService } from './services/post-detail.service';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostOverlayContentComponent } from './post-overlay-content/post-overlay-content.component';
import { PostOverlayDetailComponent } from './post-overlay-detail/post-overlay-detail.component';
import { PostOverlayMainComponent } from './post-overlay-main/post-overlay-main.component';
import { PostOverlayActionsComponent } from './post-overlay-actions/post-overlay-actions.component';
import { MatButtonModule } from '@angular/material/button';
import { PostOverlayCommentCardComponent } from './post-overlay-comment-card/post-overlay-comment-card.component';
import { MatCardModule } from '@angular/material/card';
import { PostOverlayCommentCardOptionsComponent } from './post-overlay-comment-card-options/post-overlay-comment-card-options.component';
import { PostOverlayCommentCardActionsComponent } from './post-overlay-comment-card-actions/post-overlay-comment-card-actions.component';



@NgModule({
  declarations: [
    PostOverlayComponent,
    PostOverlayContentComponent,
    PostOverlayDetailComponent,
    PostOverlayMainComponent,
    PostOverlayActionsComponent,
    PostOverlayCommentCardComponent,
    PostOverlayCommentCardOptionsComponent,
    PostOverlayCommentCardActionsComponent
  ],
  imports: [
    CommonModule,
    ModalsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    PostDetailService
  ],
  entryComponents: [
    PostOverlayComponent
  ]
})
export class PostModule { }
