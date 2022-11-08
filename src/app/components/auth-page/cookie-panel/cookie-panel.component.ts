import { Component } from '@angular/core';
import { CookiesMessageService } from './cookies-message.service';

@Component({
  selector: 'app-cookie-panel',
  templateUrl: './cookie-panel.component.html',
  styleUrls: ['./cookie-panel.component.scss'],
})
export class CookiePanelComponent {
  constructor(private cookie: CookiesMessageService) {}

  setCookie() {
    this.cookie.setCookie();
  }
}
