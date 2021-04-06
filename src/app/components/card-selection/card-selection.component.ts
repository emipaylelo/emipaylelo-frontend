import { Component, OnInit } from '@angular/core';
import { CardSelectData } from './carddetails';
@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.css']
})
export class CardSelectionComponent implements OnInit {
  cardSelected: string = " ";
  card: CardSelectData = new CardSelectData("gold", 50000, 500);
  cards: CardSelectData[] = [
    { cardType: "GOLD", totalCredit: 50000, joiningFee: 500 }, { cardType: "TITANIUM", totalCredit: 100000, joiningFee: 1000 }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  goldSelected() {
    this.cardSelected = "gold card selected";
    alert(this.cardSelected);
  }
  titaniumSelected() {
    this.cardSelected = "titanium card selected";
    alert(this.cardSelected);

  }
}
