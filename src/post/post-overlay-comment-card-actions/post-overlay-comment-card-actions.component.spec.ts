import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOverlayCommentCardActionsComponent } from './post-overlay-comment-card-actions.component';

describe('PostOverlayCommentCardActionsComponent', () => {
  let component: PostOverlayCommentCardActionsComponent;
  let fixture: ComponentFixture<PostOverlayCommentCardActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOverlayCommentCardActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOverlayCommentCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
