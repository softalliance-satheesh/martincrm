import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_shared/_layouts/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
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
import { CustomerComponent } from './pages/customer/customer.component';
import { AddCustomerDetailsComponent } from './pages/customer/add-customer-details/add-customer-details.component';
import { CustomermattersComponent } from './pages/customer/customermatters/customermatters.component';
import { ClientprofileComponent } from './pages/customer/clientprofile/clientprofile.component';
import { HearingsComponent } from './pages/customer/hearings/hearings.component';
import { NoteComponent } from './pages/customer/note/note.component';
import { DocumentsComponent } from './pages/customer/documents/documents.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      { path: "dashboard", component: HomeComponent, pathMatch: "full" },
      { path: "attorneys", component: AttorneysComponent },
      { path: "attorneys/profile", component: ProfileComponent },
      { path: "attorneys/matters", component: MattersComponent },
      { path: "attorneys/logs", component: LogsComponent },
      { path: "attorneys/messagingsystem", component: MessagingsystemComponent },
      { path: "attorneys/permissions", component: PermissionsComponent },
      { path: "attorneys/attorneysarchive", component: AttorneysarchiveComponent },
      { path: "customers", component: CustomerComponent },
      { path: "customers/add-customer-details", component: AddCustomerDetailsComponent },
      { path: "customers/clientprofile", component: ClientprofileComponent },
      { path: "customers/matters", component: CustomermattersComponent },
      { path: "customers/hearings", component: HearingsComponent },
      { path: "customers/note", component: NoteComponent },
      { path: "customers/documents", component: DocumentsComponent },
      { path: "**", redirectTo: "/dashboard" }
    ]

  },
  {
    path: "", component: PlainComponent, children: [
      { path: "login", component: LoginComponent, pathMatch: "full" },
      { path: "register", component: RegisterComponent, pathMatch: "full" },
      { path: "forgotpassword", component: ForgotpasswordComponent, pathMatch: "full" },
      { path: "**", redirectTo: "/login" }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
