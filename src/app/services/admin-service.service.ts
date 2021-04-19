import { LoginDto } from './../Models/login-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/users';

@Injectable({
  providedIn: 'root'
})

export class AdminServiceService {

  constructor(private httpClient: HttpClient) { }
  adminLogin(loginDTO: LoginDto): Observable<Boolean> {
    return this.httpClient.post<Boolean>(environment.apiUrl + "/adminLogin", loginDTO);
  }
  viewAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.apiUrl + "/getUsers");
  }
}

