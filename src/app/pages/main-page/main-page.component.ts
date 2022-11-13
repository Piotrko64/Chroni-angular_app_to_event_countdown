import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { calculateDifferentDates } from 'src/app/utils/calculateDifferentDates';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      console.log(
        calculateDifferentDates(new Date('2023-01-01T18:08:14.922Z'))
      );
    });
  }
}
