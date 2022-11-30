import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-modify-create-event',
  templateUrl: './modify-create-event.component.html',
  styleUrls: ['./modify-create-event.component.scss'],
})
export class ModifyCreateEventComponent {
  constructor(
    private route: ActivatedRoute,
    private dataUser: UserDataService,
    private router: Router
  ) {}

  titleForm = 'Add new event';
  buttonTitle = 'Add';
  eventId: null | string = null;

  eventForm = new FormGroup({
    titleEvent: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(55),
    ]),
    timeEvent: new FormControl('', [Validators.required]),
    description: new FormControl(
      '',

      Validators.maxLength(300)
    ),
  });

  back = () => {
    this.router.navigate(['home']);
  };

  ngOnInit() {
    new Notification('aa', { body: 'aaa' });

    this.route.queryParams.subscribe((eventId) => {
      this.eventId = eventId['eventId'];
      this.titleForm = this.eventId ? 'Modify event' : 'Add new event';
      this.buttonTitle = this.titleForm === 'Add new event' ? 'Add' : 'Update';
    });

    if (this.eventId) {
      const findEvent = this.dataUser.eventsUser.value.find(
        (event) => event.eventId === this.eventId
      );
      if (!findEvent) {
        return;
      }

      this.eventForm.patchValue({
        titleEvent: findEvent?.title,
        timeEvent: new Date(findEvent?.dataEvent).toISOString().slice(0, -5),
        description: findEvent?.description,
      });
    }
  }
  onSubmit() {
    const { titleEvent, timeEvent, description } = this.eventForm.value;

    if (!this.eventId) {
      this.dataUser.addEvent({
        title: titleEvent,
        dataEvent: new Date(timeEvent).toISOString(),
        description,
      });
    } else {
      this.dataUser.updateEvent({
        eventId: this.eventId,
        title: titleEvent,
        dataEvent: new Date(timeEvent).toISOString(),
        description,
      });
    }
  }
}
