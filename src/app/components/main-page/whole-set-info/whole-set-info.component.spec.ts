import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeSetInfoComponent } from './whole-set-info.component';

describe('WholeSetInfoComponent', () => {
  let component: WholeSetInfoComponent;
  let fixture: ComponentFixture<WholeSetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholeSetInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeSetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
