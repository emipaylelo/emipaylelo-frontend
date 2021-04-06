import { Component, OnInit } from '@angular/core';
import { AdminDashboardData } from './admin';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  admin: AdminDashboardData = new AdminDashboardData();
  users: AdminDashboardData[] = [{
    userId: 1,
    name: "pankaj",
    cardType: "gold",
    documentAadhar: " ",
    documentPan: " ",
    verificationStatus: false,
    verify: " "
  },
  {
    userId: 2,
    name: "madhura",
    cardType: "titanium",
    documentAadhar: " ",
    documentPan: " ",
    verificationStatus: false,
    verify: " "
  }];
  constructor() { }

  ngOnInit(): void {
  }
  aadhar(userId: number) {
    this.users[userId - 1].documentAadhar = "../../../assets/aadhar.png";
  }
  pan(userId: number) {
    this.users[userId - 1].documentPan = "../../../assets/pancard.jpeg";
  }
  setVerification(userId: number) {
    if (this.users[userId - 1].verificationStatus == false) {
      this.users[userId - 1].verificationStatus = true;
      this.users[userId - 1].verify = "user verified!";
    }
  }
}
