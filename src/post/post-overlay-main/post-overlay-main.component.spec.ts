import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOverlayMainComponent } from './post-overlay-main.component';

describe('PostOverlayMainComponent', () => {
  let component: PostOverlayMainComponent;
  let fixture: ComponentFixture<PostOverlayMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOverlayMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOverlayMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
