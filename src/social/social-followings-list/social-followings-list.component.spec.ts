import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFollowingsListComponent } from './social-followings-list.component';

describe('SocialFollowingsListComponent', () => {
  let component: SocialFollowingsListComponent;
  let fixture: ComponentFixture<SocialFollowingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialFollowingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFollowingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
