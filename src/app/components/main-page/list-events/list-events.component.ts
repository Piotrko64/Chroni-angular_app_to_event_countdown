import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss'],
})
export class ListEventsComponent {
  openList = false;
  toggleOpenList() {
    this.openList = !this.openList;
  }
}
