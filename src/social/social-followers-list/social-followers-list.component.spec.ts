import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFollowersListComponent } from './social-followers-list.component';

describe('SocialFollowersListComponent', () => {
  let component: SocialFollowersListComponent;
  let fixture: ComponentFixture<SocialFollowersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialFollowersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFollowersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
