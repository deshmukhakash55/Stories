import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFollowingComponent } from './social-following.component';

describe('SocialFollowingComponent', () => {
  let component: SocialFollowingComponent;
  let fixture: ComponentFixture<SocialFollowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialFollowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
