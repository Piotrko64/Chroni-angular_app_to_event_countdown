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
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('1s ease-out', style({ height: 300, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 300, opacity: 1 }),
        animate('1s ease-in', style({ height: 0, opacity: 0 })),
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
