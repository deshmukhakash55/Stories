import { Component, Input } from '@angular/core';
import { User } from '../socialTypes';

@Component({
  selector: 'social-blocked-user',
  templateUrl: './social-blocked-user.component.html',
  styleUrls: ['./social-blocked-user.component.css']
})
export class SocialBlockedUserComponent {
  @Input() public blockedUser: User;
}
