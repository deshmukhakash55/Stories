import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOverlayActionsComponent } from './post-overlay-actions.component';

describe('PostOverlayActionsComponent', () => {
  let component: PostOverlayActionsComponent;
  let fixture: ComponentFixture<PostOverlayActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOverlayActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOverlayActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
