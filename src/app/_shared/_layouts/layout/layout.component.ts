import { Component, OnInit } from '@angular/core';
import { NavtoggleService } from '../../navtoggle.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  togglenav: boolean = false;
  constructor(private toggleserv: NavtoggleService) {

  }

  ngOnInit() {
    this.toggleserv.currentToggleStatus.subscribe(status => {
      this.togglenav = status;
    });
  }


}
