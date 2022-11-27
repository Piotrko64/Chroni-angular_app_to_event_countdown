import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { sortingEventsByDates } from 'src/app/utils/sortingEventsByDates';

@Component({
  selector: 'app-buttons-panel',
  templateUrl: './buttons-panel.component.html',
  styleUrls: ['./buttons-panel.component.scss'],
})
export class ButtonsPanelComponent {
  id = '';
  activeInputAddById = false;

  constructor(private router: Router, private userData: UserDataService) {}

  addEvent = () => {
    this.router.navigate(['eventManage']);
  };

  toggleInputToAddById = () => {
    this.activeInputAddById = !this.activeInputAddById;
  };

  addEventById() {
    this.userData.addById(this.id);
  }
  editThisEvent = () => {
    this.router.navigate(['eventManage'], {
      queryParams: {
        eventId:
          this.userData.choosenEvent.value ||
          sortingEventsByDates(this.userData.eventsUser.value)[0].eventId,
      },
    });
  };
}
