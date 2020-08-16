import { Component, Input } from '@angular/core';
import { BlockedUsers } from '../socialTypes';

@Component({
  selector: 'social-blocked-users-list',
  templateUrl: './social-blocked-users-list.component.html',
  styleUrls: ['./social-blocked-users-list.component.css']
})
export class SocialBlockedUsersListComponent {
  @Input() public blockedUsers: BlockedUsers;
}
