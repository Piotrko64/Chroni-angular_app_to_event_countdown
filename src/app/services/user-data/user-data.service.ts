import { AllEvents, DataEvents } from './../../../@types/DataEvents';
import { ModalManageService } from './../../ui/modal-alert/modal-manage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataAuth } from 'src/@types/DataAuth';
import { Router } from '@angular/router';

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
      .post(`${environment.backendUrl}/api/login`, dataUser, {
        withCredentials: true,
      })
      .pipe(tap(() => this.isLoading.next(false)))
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => {
          this.isLoading.next(false);
          this.modal.openModal({
            title: 'Bad news!',
            description: error.error.err,
          });
        },
      });
  }
  autoLogin() {
    this.router.navigate(['autoLogin'], { replaceUrl: true });
    this.isLoading.next(true);
    this.http
      .get<DataEvents>(`${environment.backendUrl}/api/autoLogin`, {
        withCredentials: true,
      })
      .pipe(tap(() => this.isLoading.next(false)))
      .subscribe({
        next: (data) => {
          console.log('autoLogin', data);
          this.eventsUser.next(data.dataUser.allEvents);
          this.router.navigate(['home'], { replaceUrl: true });
        },
        error: (error) => {
          this.isLoading.next(false);
          this.router.navigate(['home'], { replaceUrl: true });
          this.modal.openModal({
            title: 'Bad news!',
            description: error.error.err || 'Something went wrong...',
          });
        },
      });
  }
}
