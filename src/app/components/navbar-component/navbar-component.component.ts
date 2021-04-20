import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  isUserLoggedIn(){
    return this.router.url.match('^/profiledetails') || this.router.url.match('^/orders') || this.router.url.match('^/transactions');
  }

  isUserOnLoginPage(){
    return this.router.url.match('^/login');
  }

  isUserOnSignUpPage(){
    return this.router.url.match('^/signup');
  }

  isAdminLoggedIn(){
    return this.router.url.match('^/admindashboard');
  }

}
