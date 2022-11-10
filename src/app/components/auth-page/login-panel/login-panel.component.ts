import { aboutChroni } from './../../../data/modals/aboutChroni';
import { ModalManageService } from './../../../ui/modal-alert/modal-manage.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
})
export class LoginPanelComponent {
  constructor(
    private Modal: ModalManageService,
    private userData: UserDataService
  ) {}

  title = 'Chroni';
  arrayValidators = [Validators.required, Validators.minLength(4)];
  invalidMessage = false;

  mainForm = new FormGroup({
    login: new FormControl('', this.arrayValidators),
    password: new FormControl('', this.arrayValidators),
  });

  private displayInvalidMessage() {
    if (!this.mainForm.valid) {
      this.invalidMessage = true;
      return false;
    }
    this.invalidMessage = false;
    return true;
  }

  displayModal() {
    this.Modal.openModal(aboutChroni);
  }

  onLogin() {
    if (!this.displayInvalidMessage()) {
      return;
    }
  }
  onRegister = () => {
    if (!this.displayInvalidMessage()) {
      return;
    }
    console.log(this.mainForm.value);
    this.userData.registerUser(this.mainForm.value);
  };
}
