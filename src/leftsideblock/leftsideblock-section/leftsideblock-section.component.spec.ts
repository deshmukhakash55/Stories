import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsideblockSectionComponent } from './leftsideblock-section.component';

describe('LeftsideblockSectionComponent', () => {
  let component: LeftsideblockSectionComponent;
  let fixture: ComponentFixture<LeftsideblockSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftsideblockSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsideblockSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
