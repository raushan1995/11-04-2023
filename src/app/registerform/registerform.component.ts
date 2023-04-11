import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { User } from 'src/app/user';

import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  user: User=new User();
  message:any;
  

  constructor(private service:UserRegistrationService) { }

  registerForm:any;
  ngOnInit(): void {
    this.registerForm=new FormGroup({
      "fullName":new FormControl(null,[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]),
      "password":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "emailId":new FormControl(null,[Validators.required,Validators.email]),
      "mobileNumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    });
  }
  
 
  get fullname(){return this.registerForm.get('fullName');} //first name
  get password(){return this.registerForm.get('password');} //last name
  get emailid(){return this.registerForm.get('emailId');} //emailid
  get mobilenumber(){return this.registerForm.get('mobileNumber');} // mobile number

  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);

    if(this.registerForm.valid){
      alert("Thank You");
      
      console.log("Form Submitted!");
      
    this.registerForm.reset();
    
    }
    
      }
  
  
}
