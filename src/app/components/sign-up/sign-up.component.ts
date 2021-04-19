import { Router } from '@angular/router';
import { SignUpServiceService } from './../../services/sign-up-service.service';
import { NgForm } from '@angular/forms';
import { User } from '../../Models/users';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User = new User();
  isDisabled: boolean = true;

  constructor(private signupservice: SignUpServiceService, private router: Router) { }
  login(registerForm: NgForm) {
    // console.log(this.user);
    this.signupservice.registerUser(this.user).subscribe(
      userPersisted => {
        console.log(userPersisted);
        localStorage.setItem("userId", userPersisted.userId.toString());
        this.router.navigate(['/bankdetails']);
      }
    );
  }


  ngOnInit(): void {
    localStorage.removeItem("userId");
  }
  // checkRegister(registerForm: NgForm) {
  //   if (registerForm.valid) {

  //     this.isDisabled = false;


  //   }
  // }
  //   else {
  //     alert("user not registered ");
  //   }
  // }
}
