import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
})
export class LoginPanelComponent {
  title = 'Chroni';
  arrayValidators = [Validators.required, Validators.minLength(4)];
  invalidMessage = false;

  mainForm = new FormGroup({
    login: new FormControl('', this.arrayValidators),
    password: new FormControl('', this.arrayValidators),
  });

  onLogin() {
    if (!this.mainForm.valid) {
      this.invalidMessage = true;
    }
  }
  onRegister() {}
}
