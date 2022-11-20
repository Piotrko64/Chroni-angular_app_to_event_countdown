import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

import { LoginPanelComponent } from './login-panel.component';

describe('LoginPanelComponent', () => {
  let component: LoginPanelComponent;
  let fixture: ComponentFixture<LoginPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPanelComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return false from service userData property - isLoading', () => {
    let userDataService = fixture.debugElement.injector.get(UserDataService);
    expect(userDataService.isLoading.value).toBeFalse();
  });
  it('event list should be equal empty array', () => {
    let userDataService = fixture.debugElement.injector.get(UserDataService);
    expect(userDataService.eventsUser.value.length).toBe(0);
  });
  it('should display message about invalid inputs', () => {
    const messageInvalid = 'CHECK EVERY INPUTS!!!';
    let app = fixture.debugElement.componentInstance;
    let compiled = fixture.debugElement.nativeElement;

    app.invalidMessage = 'true';

    fixture.detectChanges();

    expect(compiled.querySelector('.check').textContent).toContain(
      messageInvalid
    );
  });
});
