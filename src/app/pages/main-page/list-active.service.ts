import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListActiveService {
  isActiveList = new BehaviorSubject(false);

  toggleActiveList() {
    this.isActiveList.next(!this.isActiveList.value);
  }
}
