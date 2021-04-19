import { BankDetailServiceService } from './../../services/bank-detail-service.service';


import { IfscService } from './ifsc-service';
import { Component, OnInit } from '@angular/core';
import { IFSC } from './ifsc';
import { IfscFields } from './ifsc-mock';
import { NgForm } from '@angular/forms';
import { BankDetail } from '../../Models/bank-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  bankDetail: BankDetail = new BankDetail();
  userId: number;
  // bankdetails: BankDetailsData = new BankDetailsData(" ", 0, " ", " ", " ");
  // ifsc1: string = ' ';
  // products = [];
  // ifsc: IFSC = new IFSC();
  // ifscs: IFSC[] = [];
  // ifscs1: IfscFields = new IfscFields();
  // ifsobj: any;
  // bankName: string = " ";

  constructor(private ifscservice: IfscService, private bankDetailService: BankDetailServiceService, private router: Router) {

  }

  ngOnInit(): void {

  }
  getBankName(event: any) {
    console.log("hi");
    console.log(event.value);
    if (event.value.length == 11) {
      this.bankDetail.bankIfsc = event.value;
      this.ifscCode();
    }
  }
  checkBankDetails(bankForm: NgForm) {
    if (bankForm.valid) {

      // alert("bank det registered successfully");


    }
    else {
      // alert("bank details not registered, check all fields ");
    }
  }

  ifscCode() {
    this.ifscservice.getIfsc(this.bankDetail.bankIfsc).subscribe(

      fetchIfsc => {
        console.log(fetchIfsc);
        console.log(JSON.stringify(fetchIfsc));
        this.bankDetail.bankIfsc = fetchIfsc.IFSC;
        this.bankDetail.bankName = fetchIfsc.BANK;
        console.log(this.bankDetail);
      }


    );

  }
  setUserBankDetails(bankDetailForm: NgForm) {
    // console.log(this.user);
    this.userId = Number(localStorage.getItem("userId"));
    this.bankDetailService.setUserBankDetails(this.bankDetail, this.userId).subscribe(
      userPersisted => {
        console.log(userPersisted);

        this.router.navigate(['/uploaddocs']);
      }
    );
  }
}
