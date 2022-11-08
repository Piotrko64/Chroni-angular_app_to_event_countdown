import { Component, Input, OnInit } from '@angular/core';

type ButtonTypes = 'submit' | 'button' | 'reset';

@Component({
  selector: 'app-ordinary-button',
  templateUrl: './ordinary-button.component.html',
  styleUrls: ['./ordinary-button.component.scss'],
})
export class OrdinaryButtonComponent {
  @Input() text: string = '';
  @Input() maxWidth: boolean = false;
  @Input() type: ButtonTypes = 'button';
  @Input() addClass: string = '';
  @Input() isDisabled: boolean = false;
  @Input() callbackFunction: () => void = () => {};
}
