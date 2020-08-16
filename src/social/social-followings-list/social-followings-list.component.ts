import { Component, Input } from '@angular/core';
import { Followings } from 'social/socialTypes';

@Component({
  selector: 'social-followings-list',
  templateUrl: './social-followings-list.component.html',
  styleUrls: ['./social-followings-list.component.css']
})
export class SocialFollowingsListComponent {
  @Input() public followings: Followings;
}
