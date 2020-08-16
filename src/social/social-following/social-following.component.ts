import { Component, Input } from '@angular/core';
import { User } from '../socialTypes';

@Component({
  selector: 'social-following',
  templateUrl: './social-following.component.html',
  styleUrls: ['./social-following.component.css']
})
export class SocialFollowingComponent {
  @Input() public following: User;
}
