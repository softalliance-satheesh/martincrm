import { Component, OnInit } from "@angular/core";
import { NavtoggleService } from "../../_shared/navtoggle.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"]
})
export class TopbarComponent implements OnInit {
  isSlideMenu: boolean = false;
  constructor(private navtoggle: NavtoggleService, private router: Router) {}

  ngOnInit() {}

  toggleMenu() {
    this.navtoggle.currentToggleStatus.subscribe(status => {
      this.isSlideMenu = status;
    });
    this.navtoggle.changeStatus(this.isSlideMenu == true ? false : true);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
