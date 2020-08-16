import { TestBed } from '@angular/core/testing';

import { SocialUsersLoaderService } from './social-users-loader.service';

describe('SocialUsersLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialUsersLoaderService = TestBed.get(SocialUsersLoaderService);
    expect(service).toBeTruthy();
  });
});
