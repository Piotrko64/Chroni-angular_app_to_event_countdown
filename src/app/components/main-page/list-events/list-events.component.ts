import { Component, OnInit } from '@angular/core';
import { AllEvents } from 'src/@types/DataEvents';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss'],
})
export class ListEventsComponent implements OnInit {
  constructor(private userData: UserDataService) {}

  listEvents: AllEvents = [];
  openList = false;

  toggleOpenList() {
    this.openList = !this.openList;
  }
  ngOnInit() {
    this.userData.eventsUser.subscribe((data) => {
      console.log(data, 'aaa');
      this.listEvents = data;
    });
  }
}
