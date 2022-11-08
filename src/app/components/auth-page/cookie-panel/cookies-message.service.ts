import { BehaviorSubject } from 'rxjs';

export class CookiesMessageService {
  isCookieWasSeen = new BehaviorSubject<boolean>(
    !!localStorage.getItem('wasCookie')
  );

  setCookie() {
    localStorage.setItem('wasCookie', 'yes');
    this.isCookieWasSeen.next(true);
  }
}
