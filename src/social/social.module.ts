import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from 'base/app-routing.module';

import { SocialFacadeComponent } from './social-facade/social-facade.component';
import { SocialFollowersListComponent } from './social-followers-list/social-followers-list.component';
import { SocialFollowerComponent } from './social-follower/social-follower.component';
import { SocialFollowingsListComponent } from './social-followings-list/social-followings-list.component';
import { SocialFollowingComponent } from './social-following/social-following.component';
import { SocialBlockedUsersListComponent } from './social-blocked-users-list/social-blocked-users-list.component';
import { SocialBlockedUserComponent } from './social-blocked-user/social-blocked-user.component';
import { SocialUsersLoaderService } from './services/social-users-loader.service';
import { SocialUserComponent } from './social-user/social-user.component';

@NgModule({
  declarations: [
    SocialFacadeComponent,
    SocialFollowersListComponent,
    SocialFollowerComponent,
    SocialFollowingsListComponent,
    SocialFollowingComponent,
    SocialBlockedUsersListComponent,
    SocialBlockedUserComponent,
    SocialUserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    SocialUsersLoaderService
  ],
  exports: [
    SocialFacadeComponent
  ]
})
export class SocialModule { }
