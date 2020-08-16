import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOverlayCommentCardOptionsComponent } from './post-overlay-comment-card-options.component';

describe('PostOverlayCommentCardOptionsComponent', () => {
  let component: PostOverlayCommentCardOptionsComponent;
  let fixture: ComponentFixture<PostOverlayCommentCardOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOverlayCommentCardOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOverlayCommentCardOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
