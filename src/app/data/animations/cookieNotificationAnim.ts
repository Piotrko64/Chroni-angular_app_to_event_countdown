import { animate, style, transition, trigger } from '@angular/animations';

export const cookieNotificationAnim = [
  trigger('inOutAnimation', [
    transition(':leave', [
      style({ position: 'fixed', bottom: 0, left: 0, opacity: 1 }),
      animate(
        '0.5s ease-in',
        style({ transform: 'translateY(100px)', opacity: 0 })
      ),
    ]),
  ]),
];
