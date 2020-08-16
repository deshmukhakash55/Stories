import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommentsModalComponent } from './card-comments-modal.component';

describe('CardCommentsModalComponent', () => {
  let component: CardCommentsModalComponent;
  let fixture: ComponentFixture<CardCommentsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCommentsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCommentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
