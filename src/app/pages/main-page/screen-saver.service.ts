import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenSaverService {
  constructor() {}
  isTurnScreenSaver = false;

  toggleScreenSaver() {
    this.isTurnScreenSaver = !this.isTurnScreenSaver;
  }
}
