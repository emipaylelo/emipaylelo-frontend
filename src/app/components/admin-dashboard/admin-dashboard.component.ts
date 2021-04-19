import { AdminServiceService } from './../../services/admin-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/users';
import { AdminDashboardData } from './admin';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  admin: AdminDashboardData = new AdminDashboardData();
  users: User[];
  imgUrl: string = "";
  constructor(private adminservice: AdminServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  // aadhar(userId: number) {
  //   this.users[userId - 1].documentAadhar = "../../../assets/aadhar.png";
  // }
  // pan(userId: number) {
  //   this.users[userId - 1].documentPan = "../../../assets/pancard.jpeg";
  // }
  // setVerification(userId: number) {
  //   if (this.users[userId - 1].verificationStatus == false) {
  //     this.users[userId - 1].verificationStatus = true;
  //     this.users[userId - 1].verify = "user verified!";
  //   }
  // }
  viewAllUsers() {
    this.adminservice.viewAllUsers().subscribe(
      userPersisted => {
        console.log(userPersisted);
        this.users = userPersisted;

      }
    );
  }
  title = 'appBootstrap';

  closeResult: string = " ";



  open(content: any, i: number) {
    this.imgUrl = this.users[i].panUrl;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
