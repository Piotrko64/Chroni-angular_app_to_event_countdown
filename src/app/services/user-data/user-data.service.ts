import { ModalManageService } from './../../ui/modal-alert/modal-manage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { DataAuth } from 'src/@types/DataAuth';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient, private modal: ModalManageService) {}
  isLoading = new BehaviorSubject(false);

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
}
