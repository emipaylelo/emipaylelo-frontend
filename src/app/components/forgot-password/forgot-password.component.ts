import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ForgotPasswordData } from './forgotpassword';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  fp: ForgotPasswordData = new ForgotPasswordData();
  constructor() { }

  ngOnInit(): void {
  }
  checkForm(registerForm: NgForm) {
    if (registerForm.valid) {

      alert("user password reset successfully");


    }
    else {
      alert("user password failed to reset ");
    }
  }
}
