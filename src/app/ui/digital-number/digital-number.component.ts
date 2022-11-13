import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-number',
  templateUrl: './digital-number.component.html',
  styleUrls: ['./digital-number.component.scss'],
})
export class DigitalNumberComponent implements OnInit {
  activeNumbers = [5, 6];

  isActiveNumber(numberId: number) {
    return !!this.activeNumbers.find(
      (numberDigital) => numberDigital === numberId
    );
  }

  ngOnInit(): void {}
}
