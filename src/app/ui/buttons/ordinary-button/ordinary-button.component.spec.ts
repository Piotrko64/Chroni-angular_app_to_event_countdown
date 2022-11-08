import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinaryButtonComponent } from './ordinary-button.component';

describe('OrdinaryButtonComponent', () => {
  let component: OrdinaryButtonComponent;
  let fixture: ComponentFixture<OrdinaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdinaryButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
