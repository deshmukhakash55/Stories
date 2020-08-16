import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCardOptionsComponent } from './preview-card-options.component';

describe('PreviewCardOptionsComponent', () => {
  let component: PreviewCardOptionsComponent;
  let fixture: ComponentFixture<PreviewCardOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCardOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCardOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
