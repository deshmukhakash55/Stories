import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from 'base/app-routing.module';
import { SocialModule } from 'social/social.module';
import { LogoComponent } from './logo/logo.component';
import { NavOptionsComponent } from './nav-options/nav-options.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfilePicOptionsComponent } from './profile-pic-options/profile-pic-options.component';
import { NavNotificationsComponent } from './nav-notifications/nav-notifications.component';

@NgModule({
  declarations: [
    LogoComponent,
    NavOptionsComponent,
    NavBarComponent,
    ProfilePicOptionsComponent,
    NavNotificationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SocialModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavModule { }