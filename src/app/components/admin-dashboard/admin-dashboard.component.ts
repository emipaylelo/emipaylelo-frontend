import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/Models/users';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { AdminDashboardData } from './admin';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  admin: AdminDashboardData = new AdminDashboardData();
  users: User[];
  

  ngOnInit(): void {
  }
  
  
  title = 'appBootstrap';
  imgUrl: string = "";

  closeResult: string = " ";

  constructor(private modalService: NgbModal,private adminservice:AdminServiceService) { }

  open(content: any,i:number) {
    this.imgUrl = this.users[i].panUrl;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  
  viewAllUsers() {
    this.adminservice.viewAllUsers().subscribe(
      userPersisted => {
        console.log(userPersisted);
        this.users = userPersisted;

      }
    );
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
