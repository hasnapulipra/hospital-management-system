import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators,} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  message:any
  constructor(private router:Router){ }
myform = new FormGroup({
  fname: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z ]+$')]),
  username: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
  phone: new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
  password: new FormControl('',[Validators.required]),
  cpassword: new FormControl('',[Validators.required]),
  address: new FormControl('',[Validators.required]),
  dob : new FormControl('',[Validators.required]),
  age : new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
  bgroup : new FormControl('',[Validators.required]),
})
get fname(){
  return this.myform.get('fname');
}
get username(){
  return this.myform.get('username');
}
get email(){
  return this.myform.get('email');
}
get phone(){
  return this.myform.get('phone');
}
get password(){
  return this.myform.get('password');
}
get cpassword(){
  return this.myform.get('cpassword');
}
get address(){
  return this.myform.get('address');
}
get dob(){
  return this.myform.get('dob');
}
get age(){
  return this.myform.get('age');
}
get bgroup(){
  return this.myform.get('bgroup');
}
submit(){
  console.log(this.myform.value);
  
  
}
}
