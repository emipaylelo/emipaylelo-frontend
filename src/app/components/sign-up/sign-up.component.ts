import { NgForm } from '@angular/forms';
import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }
  checkRegister(registerForm: NgForm) {
    if (registerForm.valid) {

      alert("user registered successfully");


    }
    else {
      alert("user not registered ");
    }
  }
}
