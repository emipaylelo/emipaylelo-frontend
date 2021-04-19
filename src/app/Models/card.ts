import { CardType } from "./card-type";
import { Order } from "./order";
import { Transaction } from "./transaction";
import { User } from "./users";

export class Card {
    cardId: number;
    cardNo: number;
    cardExpiryDate: Date;
    isActive: boolean;
    cardRemainingLimit: number;
    cvv: number;
    user: User;
    orders: Order[];
    transactions: Transaction[];
    cardType: CardType;
    constructor() { }
}
