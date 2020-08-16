import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFollowerComponent } from './social-follower.component';

describe('SocialFollowerComponent', () => {
  let component: SocialFollowerComponent;
  let fixture: ComponentFixture<SocialFollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialFollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
