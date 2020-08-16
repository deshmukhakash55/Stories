import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsideblockSectionMenuComponent } from './leftsideblock-section-menu.component';

describe('LeftsideblockSectionMenuComponent', () => {
  let component: LeftsideblockSectionMenuComponent;
  let fixture: ComponentFixture<LeftsideblockSectionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftsideblockSectionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsideblockSectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
