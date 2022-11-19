import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifyCreateEventComponent } from './modify-create-event.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModifyCreateEventComponent', () => {
  let component: ModifyCreateEventComponent;
  let fixture: ComponentFixture<ModifyCreateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyCreateEventComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should find text - "Add new event"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Add new event'
    );
  });
});
