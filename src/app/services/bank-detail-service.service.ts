import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BankDetail } from '../Models/bank-detail';
import { User } from '../Models/users';

@Injectable({
  providedIn: 'root'
})
export class BankDetailServiceService {

  constructor(private httpClient: HttpClient) {


  }
  setUserBankDetails(bankDetail: BankDetail, userId: number): Observable<User> {
    return this.httpClient.post<User>(environment.apiUrl + "/setUserBankDetails?userId=" + userId, bankDetail);
  }
}
