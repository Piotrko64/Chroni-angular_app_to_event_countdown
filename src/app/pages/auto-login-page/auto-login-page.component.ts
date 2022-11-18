import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-login-page',
  templateUrl: './auto-login-page.component.html',
  styleUrls: ['./auto-login-page.component.scss'],
})
export class AutoLoginPageComponent {
  constructor(private router: Router) {}

  backToLoginPage = () => {
    this.router.navigate([''], { replaceUrl: true });
  };
}
