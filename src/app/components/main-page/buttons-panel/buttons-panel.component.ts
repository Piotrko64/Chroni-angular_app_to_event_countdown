import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

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
}
