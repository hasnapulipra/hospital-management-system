import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { BookAppoinmentComponent } from './book-appoinment/book-appoinment.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptOfPaymentComponent } from './receipt-of-payment/receipt-of-payment.component';
import { AppoinmentStatusComponent } from './appoinment-status/appoinment-status.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { PatientComponent } from './patient.component';
import { RouterModule } from '@angular/router';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';




@NgModule({
  declarations: [
    ViewProfileComponent,
    BookAppoinmentComponent,
    UpdateProfileComponent,
    PaymentComponent,
    ReceiptOfPaymentComponent,
    AppoinmentStatusComponent,
    ViewDoctorComponent,
    PatientComponent,
    PatientDashboardComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
