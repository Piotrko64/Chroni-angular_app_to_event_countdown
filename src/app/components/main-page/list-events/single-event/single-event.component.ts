import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListActiveService } from 'src/app/pages/main-page/list-active.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.scss'],
})
export class SingleEventComponent implements OnInit {
  constructor(
    private userData: UserDataService,
    private router: Router,
    private listManage: ListActiveService
  ) {}

  @Input() title!: string;
  @Input() dataEvent!: string;
  @Input() eventId!: string;

  updateThisEvent = () => {
    this.router.navigate(['/eventManage'], {
      queryParams: {
        eventId: this.eventId,
      },
    });
  };

  changeMainEvent = () => {
    this.userData.changeChoosenEvent(this.eventId);
    this.listManage.toggleActiveList();
  };

  ngOnInit(): void {}
}
