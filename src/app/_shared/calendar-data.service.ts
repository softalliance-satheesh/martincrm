import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarDataService {
  private showCalendar = new BehaviorSubject(false);
  currentCalendarStatus = this.showCalendar.asObservable();

  constructor() { }

  changeShowStatus(status: boolean) {
    this.showCalendar.next(status);
  }
}
