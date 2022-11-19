import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCreateEventComponent } from './modify-create-event.component';

describe('ModifyCreateEventComponent', () => {
  let component: ModifyCreateEventComponent;
  let fixture: ComponentFixture<ModifyCreateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyCreateEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
