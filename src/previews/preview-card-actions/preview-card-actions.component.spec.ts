import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCardActionsComponent } from './preview-card-actions.component';

describe('PreviewCardActionsComponent', () => {
  let component: PreviewCardActionsComponent;
  let fixture: ComponentFixture<PreviewCardActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCardActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
