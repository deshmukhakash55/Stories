import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOverlayCommentCardComponent } from './post-overlay-comment-card.component';

describe('PostOverlayCommentCardComponent', () => {
  let component: PostOverlayCommentCardComponent;
  let fixture: ComponentFixture<PostOverlayCommentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOverlayCommentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOverlayCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
