import { Component, OnInit } from '@angular/core';
import { exampleEvents } from '../../../data/events/exampleEvents';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss'],
})
export class ListEventsComponent {
  listEvents = exampleEvents;
  openList = false;
  toggleOpenList() {
    this.openList = !this.openList;
  }
}
