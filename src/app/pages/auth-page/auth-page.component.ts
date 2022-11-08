import { CookiesMessageService } from './../../components/auth-page/cookie-panel/cookies-message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  providers: [CookiesMessageService],
})
export class AuthPageComponent implements OnInit {
  constructor(public cookie: CookiesMessageService) {}

  displayMessage = true;

  ngOnInit() {
    this.cookie.isCookieWasSeen.subscribe((boolean) => {
      this.displayMessage = !boolean;
    });
  }
}
