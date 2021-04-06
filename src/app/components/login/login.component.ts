import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }
  checkLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      if (this.user.userEmail == "abc@gmail.com" && this.user.userPass == "abc") {

        // this.router.navigate(['/bankdetails']);
        alert("login success");

      }

      else {

        // this.router.navigate(['/error']);
        alert("login fail");

      }
    }
    else {
      alert("Enter all creds");
    }
  }
}
