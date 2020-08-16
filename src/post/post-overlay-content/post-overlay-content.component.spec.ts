import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOverlayContentComponent } from './post-overlay-content.component';

describe('PostOverlayContentComponent', () => {
  let component: PostOverlayContentComponent;
  let fixture: ComponentFixture<PostOverlayContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOverlayContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOverlayContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
