import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLoginPageComponent } from './auto-login-page.component';

describe('AutoLoginPageComponent', () => {
  let component: AutoLoginPageComponent;
  let fixture: ComponentFixture<AutoLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
