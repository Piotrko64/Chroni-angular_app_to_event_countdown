import { CookiesMessageService } from './../../components/auth-page/cookie-panel/cookies-message.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  providers: [CookiesMessageService],
  animations: [
    trigger('inOutAnimation', [
      transition(':leave', [
        style({ position: 'fixed', bottom: 0, left: 0, opacity: 1 }),
        animate(
          '0.5s ease-in',
          style({ transform: 'translateY(100px)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class AuthPageComponent implements OnInit {
  constructor(private cookie: CookiesMessageService) {}

  displayMessage = true;

  ngOnInit() {
    this.cookie.isCookieWasSeen.subscribe((boolean) => {
      this.displayMessage = !boolean;
    });
  }
}
