import { Component, OnInit } from '@angular/core';
import { EventUser } from 'src/@types/DataEvents';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private userData: UserDataService) {}
  choosenEvent: EventUser | undefined;

  ngOnInit(): void {
    this.userData.eventsUser.subscribe((data) => {
      if (!this.userData.choosenEvent.value) {
        this.choosenEvent = data[0];
      }
    });
  }
}
