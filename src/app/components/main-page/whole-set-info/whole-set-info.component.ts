import { calculateDifferentDates } from 'src/app/utils/calculateDifferentDates';
import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ObjectCountdown } from 'src/@types/ObjectCountdown';
import { typesNumbers } from 'src/app/data/digitalClock/typesNumbers';

@Component({
  selector: 'app-whole-set-info',
  templateUrl: './whole-set-info.component.html',
  styleUrls: ['./whole-set-info.component.scss'],
})
export class WholeSetInfoComponent implements OnInit {
  @Input() eventDate = '';
  @Input() title = '';
  @Input() description = '';

  typesOfNumbers = typesNumbers;
  objectCountdown: ObjectCountdown = {
    days: 0,
    minutes: 0,
    seconds: 0,
    hours: 0,
  };

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.objectCountdown = calculateDifferentDates(this.eventDate);
    });
  }
}
