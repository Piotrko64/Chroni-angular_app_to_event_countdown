import { animate, style, transition, trigger } from '@angular/animations';

export const modalsAnimation = [
  trigger('modalAnimation', [
    transition(':leave', [
      style({
        opacity: 1,
        'z-index': 99,
        position: 'relative',
      }),
      animate('.2s linear', style({ opacity: 0 })),
    ]),
    transition(':enter', [
      style({ opacity: 0, 'z-index': 99, position: 'relative', top: '0px' }),
      animate('.2s linear', style({ opacity: 1, top: '500px' })),
    ]),
  ]),
];
