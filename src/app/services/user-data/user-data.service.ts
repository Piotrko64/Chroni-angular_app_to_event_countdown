import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { dataAuth } from 'src/@types/dataAuth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  registerUser(dataUser: dataAuth) {
    this.http
      .post(`${environment.backendUrl}/api/createUser`, dataUser)
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err),
      });
  }
}
