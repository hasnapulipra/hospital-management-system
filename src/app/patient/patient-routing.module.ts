import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentStatusComponent } from './appoinment-status/appoinment-status.component';
import { BookAppoinmentComponent } from './book-appoinment/book-appoinment.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientComponent } from './patient.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptOfPaymentComponent } from './receipt-of-payment/receipt-of-payment.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {path:'patient',component:PatientComponent,children:[
    {path:'',component:PatientDashboardComponent},
    {path:'patient-dashboard',component:PatientDashboardComponent},
    {path:'appoinment-status',component:AppoinmentStatusComponent},
    {path:'book-appoinment',component:BookAppoinmentComponent},
    {path:'payment',component:PaymentComponent},
    {path:'receipt-of-payment',component:ReceiptOfPaymentComponent},
    
    {path:'update-profile',component:UpdateProfileComponent},
    {path:'view-doctor',component:ViewDoctorComponent},
    {path:'view-profile',component:ViewProfileComponent},
  ]},
  
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
  
})
export class PatientRoutingModule { }



