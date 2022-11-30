import { calculateDifferentDates } from 'src/app/utils/calculateDifferentDates';
import { AllEvents } from '../../@types/DataEvents';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
} from '@angular/core';
import { EventUser } from 'src/app/@types/DataEvents';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { Router } from '@angular/router';
import { fromEvent, interval } from 'rxjs';
import { findWallpaper } from 'src/app/data/wallpapers/wallpapersData';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private userData: UserDataService, private router: Router) {}

  @ViewChild('mainInfo') mainInfo!: ElementRef<HTMLDivElement>;
  choosenEvent: EventUser | undefined;
  eventList: AllEvents = [];
  isScreenSaverMode = false;

  turnOnScreenSaverMode = () => {
    this.isScreenSaverMode = true;

    const screen = this.mainInfo?.nativeElement;
    if (screen.requestFullscreen) {
      screen.requestFullscreen();
    }
  };

  addNewEvent = () => {
    this.router.navigate(['eventManage']);
  };

  getWallpaper() {
    return `url('/assets/wallpapers/${findWallpaper()}.jpg')`;
  }

  private showClockOnTitle() {
    if (!this.choosenEvent?.dataEvent) {
      document.title = 'Chroni';
      return;
    }
    const eventDate = calculateDifferentDates(this.choosenEvent!.dataEvent);

    const { days, minutes, hours, seconds } = eventDate;

    function concatZero(num: number) {
      return (num < 10 ? '0' : '') + num;
    }

    document.title =
      concatZero(days) +
      ':' +
      concatZero(hours) +
      ':' +
      concatZero(minutes) +
      ':' +
      concatZero(seconds);

    if (eventDate.end) {
      document.title = `🚨 ${this.choosenEvent?.title} is end`;
    }
  }

  ngOnInit(): void {
    const press = fromEvent<Event>(document, 'fullscreenchange');

    press.subscribe(() => {
      if (window.innerHeight !== screen.height) {
        this.isScreenSaverMode = false;
      }
    });

    this.userData.eventsUser.subscribe((data: AllEvents) => {
      this.eventList = data;
      if (!this.userData.choosenEvent.value) {
        this.choosenEvent = data[0];
      }
    });
    this.userData.choosenEvent.subscribe((id: string) => {
      if (!id) {
        this.choosenEvent = this.userData.eventsUser.value[0];
      } else {
        this.choosenEvent = this.userData.eventsUser.value.find(
          (event) => event.eventId === id
        );
      }
    });

    interval(1000).subscribe(() => {
      this.showClockOnTitle();
    });

    Notification.requestPermission().then((perm) => {
      if (perm === 'granted') {
        new Notification(perm, { body: 'aaa' });
      }
    });
  }
}
