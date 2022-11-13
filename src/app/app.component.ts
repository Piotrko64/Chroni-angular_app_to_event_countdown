import { ModalManageService } from './ui/modal-alert/modal-manage.service';
import { Component, OnInit } from '@angular/core';
import { Modal } from 'src/@types/Modal';
import { modalsAnimation } from './data/animations/modalsAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: modalsAnimation,
})
export class AppComponent implements OnInit {
  constructor(private modal: ModalManageService) {}

  modalInfo: Modal = { open: true, title: '', description: '' };

  ngOnInit() {
    this.modal.modalInfo.subscribe((info: Modal) => {
      this.modalInfo = info;
    });
  }
}
