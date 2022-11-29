import { CookiesMessageService } from './../../components/auth-page/cookie-panel/cookies-message.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { cookieNotificationAnim } from 'src/app/data/animations/cookieNotificationAnim';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  providers: [CookiesMessageService],
  animations: cookieNotificationAnim,
})
export class AuthPageComponent implements OnInit {
  constructor(private cookie: CookiesMessageService) {}

  displayMessage = true;

  ngOnInit() {
    alert(document.cookie + 'as');

    this.cookie.isCookieWasSeen.subscribe((boolean) => {
      this.displayMessage = !boolean;
    });
  }
}
