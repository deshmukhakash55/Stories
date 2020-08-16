import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

import { Followers, Followings, BlockedUsers } from '../socialTypes';
import { SocialUsersLoaderService } from '../services/social-users-loader.service';

type ExpandStatus = {
  followers: boolean,
  followings: boolean,
  blockedUsers: boolean
};

@Component({
  selector: 'social-facade',
  templateUrl: './social-facade.component.html',
  styleUrls: ['./social-facade.component.css']
})
export class SocialFacadeComponent implements OnInit {

  public followers: Followers;
  public followings: Followings;
  public blockedUsers: BlockedUsers;
  public expandStatus: ExpandStatus;

  constructor(private socialUsersLoaderService: SocialUsersLoaderService, private activatedRoute: ActivatedRoute) {
    this.registerUrlWatch();
  }

  private registerUrlWatch() {
    this.activatedRoute.url.subscribe((urlSegments: UrlSegment[]) => {
      this.expandStatus = {
        followers: false,
        followings: false,
        blockedUsers: false
      };
      const path = urlSegments[urlSegments.length - 1].path;
      if (path === 'followers') {
        this.expandStatus.followers = true;
      } else if (path === 'followings') {
        this.expandStatus.followings = true;
      } else if (path === 'blockedUsers') {
        this.expandStatus.blockedUsers = true;
      } else if (path === 'social') {
        this.expandStatus = {
          followers: true,
          followings: true,
          blockedUsers: true
        };
      }
    });
  }

  public ngOnInit() {
    const { followers, followings, blockedUsers } = this.socialUsersLoaderService.getAllSocialContacts();
    this.followers = followers;
    this.followings = followings;
    this.blockedUsers = blockedUsers;
  }
}
