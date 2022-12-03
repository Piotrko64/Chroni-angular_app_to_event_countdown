import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifyCreateEventComponent } from './modify-create-event.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ModifyCreateEventComponent', () => {
  let component: ModifyCreateEventComponent;
  let fixture: ComponentFixture<ModifyCreateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyCreateEventComponent],
      imports: [RouterTestingModule, RouterTestingModule],
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

    component.titleForm = 'Add new event';
    fixture.detectChanges();
    console.log(compiled);
    expect(compiled.querySelector('h1')?.innerText).toContain('Add new event');
  });
});
