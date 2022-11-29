import { ModalManageService } from './ui/modal-alert/modal-manage.service';
import { Component, OnInit } from '@angular/core';
import { Modal } from 'src/@types/Modal';
import { modalsAnimation } from './data/animations/modalsAnimation';
import { findSessionIdCookie } from './utils/cookies/findSessionIdCookie';
import { UserDataService } from './services/user-data/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: modalsAnimation,
})
export class AppComponent implements OnInit {
  constructor(
    private modal: ModalManageService,
    private loginUser: UserDataService
  ) {}

  modalInfo: Modal = { open: true, title: '', description: '' };

  ngOnInit() {
    this.modal.modalInfo.subscribe((info: Modal) => {
      this.modalInfo = info;
    });

    new Notification('a');

    Notification.requestPermission().then((perm) => {
      if (perm === 'granted') {
        console.log('granted');
        new Notification(perm, { body: 'aaa' });
      }
    });

    if (findSessionIdCookie()) {
      this.loginUser.autoLogin();
    }
  }
}
