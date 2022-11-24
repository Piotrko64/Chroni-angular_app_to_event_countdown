import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { map } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-modify-create-event',
  templateUrl: './modify-create-event.component.html',
  styleUrls: ['./modify-create-event.component.scss'],
})
export class ModifyCreateEventComponent {
  constructor(
    private route: ActivatedRoute,
    private dataUser: UserDataService
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

  ngOnInit() {
    this.route.queryParams.subscribe((eventId) => {
      this.eventId = eventId['eventId'];
      this.titleForm = this.eventId ? 'Modify event' : 'Add new event';
    });

    if (this.eventId) {
      console.log(this.dataUser.eventsUser.value);
    }
  }
  onSubmit() {
    console.log(this.eventForm.value);
  }
}
