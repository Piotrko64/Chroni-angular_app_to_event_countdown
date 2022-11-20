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
    expect(userDataService.isLoading).toBeFalse();
  });
});
