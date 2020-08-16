import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialBlockedUserComponent } from './social-blocked-user.component';

describe('SocialBlockedUserComponent', () => {
  let component: SocialBlockedUserComponent;
  let fixture: ComponentFixture<SocialBlockedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialBlockedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialBlockedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
