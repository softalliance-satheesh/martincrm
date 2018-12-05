import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-attorneys',
  templateUrl: './attorneys.component.html',
  styleUrls: ['./attorneys.component.css']
})
export class AttorneysComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  openLg(content) { this.modalService.open(content, { size: 'lg' }); }


}
