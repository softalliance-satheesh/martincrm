import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavtoggleService {


  private toggleLeftNav = new BehaviorSubject(false);
  currentToggleStatus = this.toggleLeftNav.asObservable();



  constructor() { }

  changeStatus(status: boolean) {
    this.toggleLeftNav.next(status);
  }
}
