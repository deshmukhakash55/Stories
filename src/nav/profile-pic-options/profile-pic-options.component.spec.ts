import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePicOptionsComponent } from './profile-pic-options.component';

describe('ProfilePicOptionsComponent', () => {
  let component: ProfilePicOptionsComponent;
  let fixture: ComponentFixture<ProfilePicOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePicOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePicOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
