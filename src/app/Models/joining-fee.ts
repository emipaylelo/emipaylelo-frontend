import { CardType } from "./card-type";
import { User } from "./users";

export class JoiningFee {
    joiningFeeId: number;
    joiningFeeDate: Date;
    user: User;
    cardType: CardType;
    constructor() { }
}
