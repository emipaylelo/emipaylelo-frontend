import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/users';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  constructor(private httpClient: HttpClient) { }
  registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>(environment.apiUrl + "/registerUser", user);
  }
}
