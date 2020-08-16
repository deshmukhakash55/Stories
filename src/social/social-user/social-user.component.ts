import { Component, Input } from '@angular/core';
import { User } from '../socialTypes';

@Component({
  selector: 'social-user',
  templateUrl: './social-user.component.html',
  styleUrls: ['./social-user.component.css']
})
export class SocialUserComponent {
  @Input() public user: User;

  public openUserDetail() {
    console.log('Detail page for user ' + this.user.name + ' clicked');
  }
}
