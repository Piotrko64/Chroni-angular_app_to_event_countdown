import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Modal } from 'src/@types/modal';
import { ModalManageService } from './modal-manage.service';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ModalAlertComponent implements OnInit {
  constructor(private modal: ModalManageService) {}

  dataModal: Omit<Modal, 'open'> = { title: '', description: '' };

  closeModal = () => {
    this.modal.closeModal();
  };

  ngOnInit(): void {
    this.modal.modalInfo.subscribe((info: Modal) => {
      this.dataModal = info;
    });
  }
}
