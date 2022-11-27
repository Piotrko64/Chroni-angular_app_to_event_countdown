import { AllEvents } from './../../../@types/DataEvents';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventUser } from 'src/@types/DataEvents';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private userData: UserDataService) {}

  @ViewChild('mainInfo') mainInfo!: ElementRef<HTMLDivElement>;
  choosenEvent: EventUser | undefined;
  eventList: AllEvents = [];

  turnOnScreenSaverMode = () => {
    const screen = this.mainInfo?.nativeElement;
    if (screen.requestFullscreen) {
      screen.requestFullscreen();
    }
  };

  ngOnInit(): void {
    this.userData.eventsUser.subscribe((data: AllEvents) => {
      this.eventList = data;
      if (!this.userData.choosenEvent.value) {
        this.choosenEvent = data[0];
      }
    });
  }
}
