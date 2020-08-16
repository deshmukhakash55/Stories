import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFacadeComponent } from './social-facade.component';

describe('SocialFacadeComponent', () => {
  let component: SocialFacadeComponent;
  let fixture: ComponentFixture<SocialFacadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialFacadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
