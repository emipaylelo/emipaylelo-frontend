import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CardSelectionServiceService } from './../../services/card-selection-service.service';
import { Component, OnInit } from '@angular/core';
import { CardType } from 'src/app/Models/card-type';
import { CardTypeDTO } from 'src/app/Models/card-type-dto';

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.css']
})
export class CardSelectionComponent implements OnInit {

  cards: CardType[];
  userId: number;
  cardIsSelected: CardTypeDTO = new CardTypeDTO();

  constructor(private cardSelectionService: CardSelectionServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getCardTypes();
  }
  getCardTypes() {
    this.userId = Number(localStorage.getItem("userId"));
    this.cardSelectionService.getCardTypes().subscribe(
      cardTypeFetch => {
        console.log(cardTypeFetch);
        this.cards = cardTypeFetch;
        console.log(this.cards);
      }
    );
  }
  // goldSelected() {
  //   this.cardSelected = "gold card selected";
  //   alert(this.cardSelected);
  // }
  // titaniumSelected() {
  //   this.cardSelected = "titanium card selected";
  //   alert(this.cardSelected);

  // }
  setUserCardType(cardSelectionForm: NgForm) {
    this.userId = Number(localStorage.getItem("userId"));
    this.cardSelectionService.setUserCardType(this.userId, this.cardIsSelected).subscribe(
      userPersisted => {
        console.log(userPersisted);

        // this.router.navigate(['/uploaddocs']);
      }
    );
  }

}
