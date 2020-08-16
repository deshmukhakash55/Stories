import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from './../leftsideblockTypes';

@Component({
  selector: 'leftsideblock-section-list',
  templateUrl: './leftsideblock-section-list.component.html',
  styleUrls: ['./leftsideblock-section-list.component.css']
})
export class LeftsideblockSectionListComponent {
  @Input() public sections: Section[];

  constructor(private router: Router) {
    this.sections = [
      {
        title: 'Images',
        menus: [
          {
            label: 'My Images',
            action: () => { console.log('My Images clicked!'); }
          },
          {
            label: 'Drafts',
            action: () => { console.log('Drafts clicked!'); }
          },
          {
            label: 'Bookmarked Images',
            action: () => { console.log('Bookmarked Images clicked!'); }
          }
        ]
      },
      {
        title: 'Social',
        menus: [
          {
            label: 'Followers',
            action: () => { this.router.navigate([{ outlets: { home: 'social/followers' } }   ]); }
          },
          {
            label: 'Followings',
            action: () => { this.router.navigate([{ outlets: { home: 'social/followings' } }]); }
          },
          {
            label: 'Messages',
            action: () => { console.log('Messages clicked!'); }
          },
          {
            label: 'Blocked Users',
            action: () => { this.router.navigate([{ outlets: { home: 'social/blockedUsers' } }]); }
          }
        ]
      },
      {
        title: 'History',
        menus: [
          {
            label: 'Search History',
            action: () => { console.log('Search History clicked!'); }
          },
          {
            label: 'Other History',
            action: () => { console.log('Other History clicked!'); }
          }
        ]
      },
      {
        title: 'Settings',
        menus: [
          {
            label: 'My Profile',
            action: () => { console.log('My Profile clicked!'); }
          },
          {
            label: 'Privacy',
            action: () => { console.log('Privacy clicked!'); }
          },
          {
            label: 'Reports',
            action: () => { console.log('Reports clicked!'); }
          }
        ]
      }
    ];
  }
}
