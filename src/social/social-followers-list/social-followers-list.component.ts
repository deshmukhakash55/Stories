import { Component, Input } from '@angular/core';
import { Followers } from './../socialTypes';

@Component({
  selector: 'social-followers-list',
  templateUrl: './social-followers-list.component.html',
  styleUrls: ['./social-followers-list.component.css']
})
export class SocialFollowersListComponent {
  @Input() public followers: Followers;
}
