import { DocDTO } from './../Models/doc-upload-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/users';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadDocsServiceService {


  constructor(private httpClient: HttpClient) { }
  setUserDocumentDetails(userId: number, uploadData: FormData): Observable<User> {
    console.log(uploadData.get("aadharFile"));
    return this.httpClient.post<User>(environment.apiUrl + "/setUserDocumentDetails?userId=" + userId, uploadData);
  }
}
