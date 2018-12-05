import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CalendarDataService } from '../_shared/calendar-data.service';

@Component({
  selector: 'app-calendarlist',
  templateUrl: './calendarlist.component.html',
  styleUrls: ['./calendarlist.component.css']
})
export class CalendarlistComponent implements OnInit {
  visible = true;
  showCalendar: boolean;
  days = {
    monday: true,
    tuesday: false,
    wednesday: false
  };
  constructor(private calendarStatus: CalendarDataService) { }

  ngOnInit() {
  }

  viewCalendar() {
    this.showCalendar = true;
    this.calendarStatus.currentCalendarStatus.subscribe(status => {
      this.showCalendar = status;
    });
    this.calendarStatus.changeShowStatus(true);
  }
  toggleDay(day) {
    // this.days.monday = false;
    // this.days.tuesday = false;
    // this.days.wednesday = false;
    this.days[day] = (this.days[day]) ? false : true;
  }

}
