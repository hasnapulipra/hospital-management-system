import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';

import { DoctorsDashboardComponent } from './doctors-dashboard/doctors-dashboard.component';
import { DoctorsComponent } from './doctors.component';
import { MyAppoinmentsComponent } from './my-appoinments/my-appoinments.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
    {path:'doctors',component:DoctorsComponent,children:[
        {path:'',component:DoctorsDashboardComponent},
        {path:'doctors-dashboard',component:DoctorsDashboardComponent},
        {path:'my-appoinments',component:MyAppoinmentsComponent},
        {path:'add-prescription',component:AddPrescriptionComponent},
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
export class DoctorsRoutingModule { }



