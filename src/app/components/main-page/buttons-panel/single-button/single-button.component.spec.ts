import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleButtonComponent } from './single-button.component';

describe('SingleButtonComponent', () => {
  let component: SingleButtonComponent;
  let fixture: ComponentFixture<SingleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
