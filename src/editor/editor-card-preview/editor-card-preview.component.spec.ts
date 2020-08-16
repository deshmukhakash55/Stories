import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorCardPreviewComponent } from './editor-card-preview.component';

describe('EditorCardPreviewComponent', () => {
  let component: EditorCardPreviewComponent;
  let fixture: ComponentFixture<EditorCardPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorCardPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorCardPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
