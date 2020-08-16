import { Injectable } from '@angular/core';
import { SocialContacts } from '../socialTypes';

@Injectable()
export class SocialUsersLoaderService {

  public getAllSocialContacts(): SocialContacts {
    const socialContacts = {
      followers: [
        {
          name: 'Virat Kohli',
          profile_pic: 'url(\'../../assets/profile_pic.jpg\')',
        },
        {
          name: 'Sachin Tendulkar',
          profile_pic: 'url(\'../../assets/profile_pic.jpg\')'
        }
      ],
      followings: [
        {
          name: 'Bill Gates',
          profile_pic: 'url(\'../../assets/profile_pic.jpg\')',
        },
        {
          name: 'Jeff Bezos',
          profile_pic: 'url(\'../../assets/profile_pic.jpg\')'
        }
      ],
      blockedUsers: [
        {
          name: 'Mark Zuckerberg',
          profile_pic: 'url(\'../../assets/profile_pic.jpg\')',
        },
        {
          name: 'Elon Musk',
          profile_pic: 'url(\'../../assets/profile_pic.jpg\')'
        }
      ]
    };
    return socialContacts;
  }

}
