import { Component, OnInit } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-attorneysidebar",
  templateUrl: "./attorneysidebar.component.html",
  styleUrls: ["./attorneysidebar.component.css"]
})
export class AttorneysidebarComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit() { }


  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}
