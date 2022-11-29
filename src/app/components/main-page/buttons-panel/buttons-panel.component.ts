import { ModalManageService } from './../../../ui/modal-alert/modal-manage.service';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
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

  constructor(
    private router: Router,
    private userData: UserDataService,
    private modal: ModalManageService
  ) {}
  @Input() screenSaverFn!: () => void;

  addEvent = () => {
    this.router.navigate(['eventManage']);
  };

  closeAddEventDiv = () => {
    this.activeInputAddById = false;
  };

  toggleInputToAddById = () => {
    this.activeInputAddById = !this.activeInputAddById;
  };

  addEventById = () => {
    this.userData.addById(this.id);
    this.activeInputAddById = false;
  };

  private getMainEventId() {
    return (
      this.userData.choosenEvent.value ||
      sortingEventsByDates(this.userData.eventsUser.value)[0].eventId
    );
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

  showId = () => {
    navigator.clipboard.writeText(this.getMainEventId());

    this.modal.openModal({
      title: `
ID has been copied to the clipboard`,
      description: `You can use this Id to share your event for your friends. \n ID: ${this.getMainEventId()}`,
    });
  };

  deleteMainEvent = () => {
    this.userData.deleteEvent(this.getMainEventId());
  };

  turnOnScreenSaver = () => {
    this.screenSaverFn();
  };

  deleteEvent = () => {};
}
