import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalManageService {
  modalInfo = new BehaviorSubject({
    title: 'Chroni',
    description: `A countdown app for events you save.
  You can create new events and see how much time you have left to complete them. You can share events with others.
  Chroni was programmed with the help of Angular technology`,
    open: false,
  });

  openModal(title: string, description: string) {
    this.modalInfo.next({ title, description, open: true });
  }
  closeModal() {
    this.modalInfo.next({ ...this.modalInfo.value, open: true });
  }
}
