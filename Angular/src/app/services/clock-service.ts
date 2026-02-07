import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  private timerId: NodeJS.Timeout | undefined;
  private currenTime: Date = new Date();

  constructor() {
    this.start();
  }
  start() {
    this.timerId = setInterval(() => {
      this.currenTime = new Date();
    }, 1000);
  }
  getCurrentTime() {
    return this.currenTime;
  }
  ngOnDestroy() {
    clearInterval(this.timerId);
  }
}