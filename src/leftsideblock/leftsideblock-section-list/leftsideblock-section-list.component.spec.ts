import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsideblockSectionListComponent } from './leftsideblock-section-list.component';

describe('LeftsideblockSectionListComponent', () => {
  let component: LeftsideblockSectionListComponent;
  let fixture: ComponentFixture<LeftsideblockSectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftsideblockSectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsideblockSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
