import { AllEvents, DataEvents } from './../../../@types/DataEvents';
import { ModalManageService } from './../../ui/modal-alert/modal-manage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataAuth } from 'src/@types/DataAuth';
import { Router } from '@angular/router';
import { clearCookies } from 'src/app/utils/cookies/clearCookies';

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
          this.eventsUser.next(data.dataUser.allEvents);
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
  autoLogin() {
    this.router.navigate(['autoLogin']);
    const targetUrl = this.router.url;
    this.isLoading.next(true);
    this.http
      .get<DataEvents>(`${environment.backendUrl}/api/autoLogin`, {
        withCredentials: true,
      })
      .pipe(tap(() => this.isLoading.next(false)))
      .subscribe({
        next: (data) => {
          this.isAuth.next(true);
          this.eventsUser.next(data.dataUser.allEvents);
          console.log(targetUrl);
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
