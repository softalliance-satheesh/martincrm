import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  eventStartdate: any;
  eventEndtdate: any;

  startTime = { hour: 13, minute: 30 };
  endTime = { hour: 13, minute: 30 };

  constructor(private modalService: NgbModal, private calendar: NgbCalendar) {}

  ngOnInit() {}

  openLg(content) {
    this.modalService.open(content, { size: "lg" });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  selectToday() {
    this.eventStartdate = this.calendar.getToday();
    this.eventEndtdate = this.calendar.getToday();
  }
}
