import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { UpdateDetailsOfDoctorComponent } from './update-details-of-doctor/update-details-of-doctor.component';
import { RecordsComponent } from './records/records.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    ViewProfileComponent,
    PaymentRequestComponent,
    AddDoctorComponent,
    UpdateDetailsOfDoctorComponent,
    RecordsComponent,
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
