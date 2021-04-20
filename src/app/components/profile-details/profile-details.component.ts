import { Component, OnInit } from '@angular/core';
import { BankDetail } from 'src/app/Models/bank-detail';
import { User } from 'src/app/Models/users';
import { IfscService } from 'src/app/components/bank-details/ifsc-service';
import { Card } from 'src/app/Models/card';
import { CardType } from 'src/app/Models/card-type';
import { CardTypeEnum } from 'src/app/Models/card-type-enum';
import { ProfileDetailsService } from 'src/app/services/profile-details.service';
import { NgForm } from '@angular/forms';
import { SignUpServiceService } from 'src/app/services/sign-up-service.service';
import { BankDetailServiceService } from './../../services/bank-detail-service.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  user:User = new User();
  bankDetail:BankDetail = new BankDetail();
  card:Card = new Card();
  // cardType:CardType = this.card.cardType;
  dueAmount:number;
  confirmPassword:string;
  userVerificationStatus:string;
  cardType:string;
  userId:number;

  constructor(private ifscservice: IfscService, private profileDetailsService: ProfileDetailsService, private signUpService:SignUpServiceService, private bankDetailService:BankDetailServiceService) { }

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem("userId"));
    this.profileDetailsService.getUser(this.userId).subscribe(
      userPersisted => {
        this.user = userPersisted;
        this.card = userPersisted.card;
        this.bankDetail = userPersisted.bankdetail;
        if(this.user.isApproved) {
          this.dueAmount = this.card.cardType.cardLimit - this.card.cardRemainingLimit;          
        }
        this.cardType = userPersisted.joiningfee.cardType.cardType.toString();
      }
    );
    if(this.user.isApproved) {
      this.userVerificationStatus = 'Verified';
    } else {
      this.userVerificationStatus = 'Not Verified';
    }
  }


  getBankName(event: any) {
    console.log("hi");
    console.log(event.value);
    if (event.value.length == 11) {
      this.bankDetail.bankIfsc = event.value;
      this.ifscCode();
    }
  }

  ifscCode() {
    this.ifscservice.getIfsc(this.bankDetail.bankIfsc).subscribe(

      fetchIfsc => {
        console.log(fetchIfsc);
        console.log(JSON.stringify(fetchIfsc));
        this.bankDetail.bankIfsc = fetchIfsc.IFSC;
        this.bankDetail.bankName = fetchIfsc.BANK;
      }
    );
  }

  profileDetails(form:NgForm) {
    this.signUpService.registerUser(this.user);
    this.bankDetailService.setUserBankDetails(this.bankDetail, this.userId);
  }
}
