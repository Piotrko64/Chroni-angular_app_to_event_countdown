import { aboutChroni } from './../../../data/modals/aboutChroni';
import { ModalManageService } from './../../../ui/modal-alert/modal-manage.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
})
export class LoginPanelComponent {
  constructor(private Modal: ModalManageService) {}

  title = 'Chroni';
  arrayValidators = [Validators.required, Validators.minLength(4)];
  invalidMessage = false;

  mainForm = new FormGroup({
    login: new FormControl('', this.arrayValidators),
    password: new FormControl('', this.arrayValidators),
  });

  displayModal() {
    this.Modal.openModal(aboutChroni);
  }

  onLogin() {
    if (!this.mainForm.valid) {
      this.invalidMessage = true;
    }
  }
  onRegister() {}
}
