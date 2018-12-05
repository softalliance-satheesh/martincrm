import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer-details',
  templateUrl: './add-customer-details.component.html',
  styleUrls: ['./add-customer-details.component.css']
})
export class AddCustomerDetailsComponent implements OnInit {

  individualForm: boolean = true;
  companyForm: boolean = false;

  constructor() { }

  ngOnInit() { }

  companyChecked() {
    this.companyForm = true;
    this.individualForm = false;
  }

  individualChecked() {
    this.individualForm = true;
    this.companyForm = false;
  }
}
