import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
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

  back() {
    this.router.navigate(['home']);
  }

  ngOnInit() {
    this.route.queryParams.subscribe((eventId) => {
      this.eventId = eventId['eventId'];
      this.titleForm = this.eventId ? 'Modify event' : 'Add new event';
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
    this.dataUser.addEvent({
      title: titleEvent,
      dataEvent: new Date(timeEvent).toISOString(),
      description,
    });
  }
}
