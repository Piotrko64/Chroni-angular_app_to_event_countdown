import { ListActiveService } from './../../../pages/main-page/list-active.service';
import { Component, OnInit } from '@angular/core';
import { AllEvents } from 'src/@types/DataEvents';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss'],
})
export class ListEventsComponent implements OnInit {
  constructor(
    private userData: UserDataService,
    private listManage: ListActiveService
  ) {}

  listEvents: AllEvents = [];
  openList = false;

  toggleOpenList() {
    this.listManage.toggleActiveList();
  }

  ngOnInit() {
    this.userData.eventsUser.subscribe((data) => {
      this.listEvents = data;
    });

    this.listManage.isActiveList.subscribe((active) => {
      this.openList = active;
    });
  }
}
