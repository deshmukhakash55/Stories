import { Component, Input } from '@angular/core';
import { User } from 'social/socialTypes';

@Component({
  selector: 'social-follower',
  templateUrl: './social-follower.component.html',
  styleUrls: ['./social-follower.component.css']
})
export class SocialFollowerComponent {

  @Input() public follower: User;

}
