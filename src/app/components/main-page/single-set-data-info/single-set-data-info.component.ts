import { dataToDigitalClock } from './../../../data/digitalClock/dataToDigitalClock';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-set-data-info',
  templateUrl: './single-set-data-info.component.html',
  styleUrls: ['./single-set-data-info.component.scss'],
})
export class SingleSetDataInfoComponent {
  @Input() numbersOfDate = 2;
  @Input() nameTypeDate = 'seconds';
}
