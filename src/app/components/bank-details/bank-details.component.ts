import { IfscService } from './ifsc-service';
import { Component, OnInit } from '@angular/core';
import { IFSC } from './ifsc';
import { IfscFields } from './ifsc-mock';
import { NgForm } from '@angular/forms';
import { BankDetailsData } from './bankdetails';
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  bankdetails: BankDetailsData = new BankDetailsData(" ", 0, " ", " ", " ");
  ifsc1: string = ' ';
  products = [];
  ifsc: IFSC = new IFSC();
  ifscs: IFSC[] = [];
  ifscs1: IfscFields = new IfscFields();
  ifsobj: any;
  bankName: string = " ";

  constructor(private ifscservice: IfscService) {

  }

  ngOnInit(): void {

  }
  getBankName(event: any) {
    console.log("hi");
    console.log(event.value);
    if (event.value.length == 11) {
      this.ifsc1 = event.value;
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
    this.ifscservice.getIfsc(this.ifsc1).subscribe(

      fetchIfsc => {
        console.log(fetchIfsc);
        console.log(JSON.stringify(fetchIfsc));
        this.ifscs1 = fetchIfsc;
        this.bankName = this.ifscs1.BANK;
        console.log(this.bankName);
      }


    );

  }
}
