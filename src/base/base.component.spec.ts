import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseComponent } from './base.component';

describe('BaseComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BaseComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BaseComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Stories'`, () => {
    const fixture = TestBed.createComponent(BaseComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Stories');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BaseComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Stories app is running!');
  });
});
