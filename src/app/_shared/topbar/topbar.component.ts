import { Component, OnInit } from '@angular/core';
import { NavtoggleService } from '../../_shared/navtoggle.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  isSlideMenu: boolean = false;
  constructor(private navtoggle: NavtoggleService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.navtoggle.currentToggleStatus.subscribe(status => {
      this.isSlideMenu = status;
    });
    this.navtoggle.changeStatus((this.isSlideMenu == true) ? false : true);
  }

}
