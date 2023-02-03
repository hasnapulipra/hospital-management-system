import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { MyAppoinmentsComponent } from './my-appoinments/my-appoinments.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { DoctorsDashboardComponent } from './doctors-dashboard/doctors-dashboard.component';
import { RouterModule } from '@angular/router';
import { DoctorsRoutingModule } from './doctors-routing.module';



@NgModule({
  declarations: [
    DoctorsComponent,
    ViewProfileComponent,
    MyAppoinmentsComponent,
    AddPrescriptionComponent,
    DoctorsDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DoctorsRoutingModule,
  ]
})
export class DoctorsModule { }
