import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'loginDoctor',component:LoginDoctorComponent},
  {path:'loginPatient',component:LoginPatientComponent},
  {path:'register',component:RegisterComponent},
  // {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
