import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialBlockedUsersListComponent } from './social-blocked-users-list.component';

describe('SocialBlockedUsersListComponent', () => {
  let component: SocialBlockedUsersListComponent;
  let fixture: ComponentFixture<SocialBlockedUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialBlockedUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialBlockedUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
