import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CardType } from '../Models/card-type';
import { CardTypeDTO } from '../Models/card-type-dto';
import { User } from '../Models/users';

@Injectable({
  providedIn: 'root'
})
export class CardSelectionServiceService {

  constructor(private httpClient: HttpClient) {


  }
  getCardTypes(): Observable<CardType[]> {
    return this.httpClient.get<CardType[]>(environment.apiUrl + "/getCardTypes");
  }
  setUserCardType(userId: number, cardTypeDTO: CardTypeDTO): Observable<User> {
    console.log(cardTypeDTO);
    console.log(userId);
    return this.httpClient.post<User>(environment.apiUrl + "/setUserCardType?userId=" + userId, cardTypeDTO);
  }
}
