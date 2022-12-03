import { UserDataService } from './../../../services/user-data/user-data.service';
import { calculateDifferentDates } from 'src/app/utils/calculateDifferentDates';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { interval } from 'rxjs';
import { ObjectCountdown } from 'src/app/@types/ObjectCountdown';
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
  @Input() versionList = false;
  @Input() isScreenSaverMode = false;

  typesOfNumbers = typesNumbers;
  choosenEventDate = '';

  objectCountdown: ObjectCountdown = {
    end: false,
    days: 0,
    minutes: 0,
    seconds: 0,
    hours: 0,
  };

  ngOnInit() {
    interval(1000).subscribe(() => {
      this.objectCountdown = calculateDifferentDates(this.eventDate);
    });
  }
}
