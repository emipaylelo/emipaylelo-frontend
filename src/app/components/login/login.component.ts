import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminServiceService } from './../../services/admin-service.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  radioButton: string;

  constructor(private adminService: AdminServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  checkLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      if (this.radioButton == "admin") {
        this.adminService.adminLogin(this.user).subscribe(
          isLoginValid => {
            console.log(isLoginValid);
            if (isLoginValid == true)
              this.router.navigate(['/admindashboard']);
          }
        );

      }
    }

  }
}
