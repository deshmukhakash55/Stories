import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOverlayDetailComponent } from './post-overlay-detail.component';

describe('PostOverlayDetailComponent', () => {
  let component: PostOverlayDetailComponent;
  let fixture: ComponentFixture<PostOverlayDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOverlayDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOverlayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
