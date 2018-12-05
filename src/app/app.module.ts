import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './_shared/_layouts/layout/layout.component';
import { TopbarComponent } from './_shared/topbar/topbar.component';
import { LeftsidebarComponent } from './_shared/leftsidebar/leftsidebar.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './elements/calendar/calendar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarlistComponent } from './calendarlist/calendarlist.component';
import { PlainComponent } from './_shared/_layouts/plain/plain.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { AttorneysComponent } from './pages/attorneys/attorneys.component';
import { ProfileComponent } from './pages/attorneys/profile/profile.component';
import { MattersComponent } from './pages/attorneys/matters/matters.component';
import { LogsComponent } from './pages/attorneys/logs/logs.component';
import { MessagingsystemComponent } from './pages/attorneys/messagingsystem/messagingsystem.component';
import { PermissionsComponent } from './pages/attorneys/permissions/permissions.component';
import { AttorneysarchiveComponent } from './pages/attorneys/attorneysarchive/attorneysarchive.component';
import { AttorneysidebarComponent } from './pages/attorneys/attorneysidebar/attorneysidebar.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { AddCustomerDetailsComponent } from './pages/customer/add-customer-details/add-customer-details.component';
import { CustomermattersComponent } from './pages/customer/customermatters/customermatters.component';
import { ClientprofileComponent } from './pages/customer/clientprofile/clientprofile.component';
import { HearingsComponent } from './pages/customer/hearings/hearings.component';
import { NoteComponent } from './pages/customer/note/note.component';
import { DocumentsComponent } from './pages/customer/documents/documents.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopbarComponent,
    LeftsidebarComponent,
    FooterComponent,
    HomeComponent,
    CalendarComponent,
    CalendarlistComponent,
    PlainComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    AttorneysComponent,
    ProfileComponent,
    MattersComponent,
    LogsComponent,
    MessagingsystemComponent,
    PermissionsComponent,
    AttorneysarchiveComponent,
    AttorneysidebarComponent,
    CustomerComponent,
    AddCustomerDetailsComponent,
    CustomermattersComponent,
    ClientprofileComponent,
    HearingsComponent,
    NoteComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PerfectScrollbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
