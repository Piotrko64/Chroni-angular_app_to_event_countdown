import {
  AddingEvent,
  AllEvents,
  DataEvents,
  EventUser,
  ResponseEvent,
  UpdateEvent,
} from '../../@types/DataEvents';
import { ModalManageService } from './../../ui/modal-alert/modal-manage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataAuth } from 'src/app/@types/DataAuth';
import { Router } from '@angular/router';
import { clearCookies } from 'src/app/utils/cookies/clearCookies';
import { sortingEventsByDates } from 'src/app/utils/sortingEventsByDates';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(
    private http: HttpClient,
    private modal: ModalManageService,
    private router: Router
  ) {}
  isLoading = new BehaviorSubject(false);
  eventsUser = new BehaviorSubject<AllEvents>([]);
  isAuth = new BehaviorSubject(false);
  choosenEvent = new BehaviorSubject<string>('');

  changeChoosenEvent(id: string) {
    this.choosenEvent.next(id);
  }

  deleteEvent(eventId: string) {
    this.http
      .delete<ResponseEvent>(`${environment.backendUrl}/api/deleteEvent`, {
        body: {
          eventId,
        },
        withCredentials: true,
      })
      .subscribe({
        next: (data) => {
          this.eventsUser.next(
            this.eventsUser.value.filter((event) => event.eventId !== eventId)
          );

          this.choosenEvent.next('');

          this.modal.openModal({
            title: 'Yeah!',
            description: data.message,
          });
        },
        error: () => {
          this.modal.openModal({
            title: 'Oh noo!',
            description: 'Something is wrong. Please try later',
          });
        },
      });
  }

  registerUser(dataUser: DataAuth) {
    this.isLoading.next(true);
    this.http
      .post(`${environment.backendUrl}/api/createUser`, dataUser)
      .pipe(tap(() => this.isLoading.next(false)))
      .subscribe({
        next: (message) => {
          this.modal.openModal({
            title: 'Yeah!',
            description: (message + '. You can login to Chroni') as string,
          });
        },
        error: (error) => {
          this.isLoading.next(false);
          this.modal.openModal({
            title: 'Bad news!',
            description: error.error.err,
          });
        },
      });
  }

  loginUser(dataUser: DataAuth) {
    this.isLoading.next(true);
    this.http
      .post<DataEvents>(`${environment.backendUrl}/api/login`, dataUser, {
        withCredentials: true,
      })
      .pipe(tap(() => this.isLoading.next(false)))
      .subscribe({
        next: (data) => {
          this.router.navigate(['home'], { replaceUrl: true });
          this.isAuth.next(true);
          this.eventsUser.next(sortingEventsByDates(data.dataUser.allEvents));
        },
        error: (error) => {
          this.isLoading.next(false);
          this.modal.openModal({
            title: 'Bad news!',
            description: error.error.err || 'Something is wrong...',
          });
        },
      });
  }

  logOut() {
    this.router.navigate([''], { replaceUrl: true });
    this.modal.openModal({
      title: 'Bye!',
      description: 'You are log out!',
    });
    this.isAuth.next(false);
    this.http
      .delete(`${environment.backendUrl}/api/logout`, {
        withCredentials: true,
      })
      .subscribe({
        next: clearCookies,
        error: clearCookies,
      });
  }

  addEvent(body: AddingEvent) {
    this.http
      .post<{ addNewEvent: EventUser }>(
        `${environment.backendUrl}/api/addEvent`,

        body,
        {
          withCredentials: true,
        }
      )
      .subscribe({
        next: (data) => {
          this.eventsUser.next(
            this.eventsUser.getValue().concat([data.addNewEvent])
          );
          this.modal.openModal({
            title: 'We add new event!!!',
            description: '🥳🥳🥳',
          });
          this.router.navigate(['home']);
        },
        error: (err) => {
          console.log(err);
          this.modal.openModal({
            title: 'Something went wrong...',
            description: err.error.err,
          });
        },
      });
  }

  updateEvent(body: UpdateEvent) {
    this.http
      .put<ResponseEvent>(
        `${environment.backendUrl}/api/updateEvent`,

        body,
        {
          withCredentials: true,
        }
      )
      .subscribe({
        next: (data) => {
          this.modal.openModal({
            title: 'Everything is ok!',
            description: data.message,
          });

          const events = this.eventsUser.value;
          const indexEvent = this.eventsUser.value.findIndex(
            (event) => event.eventId === body.eventId
          );
          events[indexEvent] = body;

          this.eventsUser.next(events);
          this.router.navigate(['home']);
        },
        error: (err) => {
          this.modal.openModal({
            title: 'Something went wrong...',
            description: err.error.err,
          });
        },
      });
  }

  addById(eventId: string) {
    this.http
      .post<ResponseEvent>(
        `${environment.backendUrl}/api/addEventById`,
        {
          eventId,
        },
        {
          withCredentials: true,
        }
      )
      .subscribe({
        next: (data) => {
          this.eventsUser.next(this.eventsUser.getValue().concat([data.data]));
          this.modal.openModal({
            title: data.message,
            description: '🥳🥳🥳',
          });
        },
        error: (err) => {
          console.log(err);
          this.modal.openModal({
            title: 'Something went wrong...',
            description: err.error.err,
          });
        },
      });
  }

  autoLogin() {
    this.router.navigate(['autoLogin']);

    this.isLoading.next(true);
    this.http
      .get<DataEvents>(`${environment.backendUrl}/api/autoLogin`, {
        withCredentials: true,
      })
      .pipe(tap(() => this.isLoading.next(false)))
      .subscribe({
        next: (data) => {
          this.isAuth.next(true);
          this.eventsUser.next(sortingEventsByDates(data.dataUser.allEvents));

          this.router.navigate(['/home'], {
            replaceUrl: true,
          });
        },
        error: (error) => {
          this.isLoading.next(false);
          this.router.navigate(['/'], { replaceUrl: true });
          this.modal.openModal({
            title: 'Bad news!',
            description: error.error.err || 'Something went wrong...',
          });
        },
      });
  }
}
