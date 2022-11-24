import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-button',
  templateUrl: './single-button.component.html',
  styleUrls: ['./single-button.component.scss'],
})
export class SingleButtonComponent implements OnInit {
  @Input() textTooltip = '';
  @Input() namePng = '';
  @Input() callbackFunction = () => {};

  ngOnInit(): void {}
}
