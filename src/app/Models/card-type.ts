import { Card } from "./card";
import { CardTypeEnum } from "./card-type-enum";
import { JoiningFee } from "./joining-fee";

export class CardType {
    cardTypeId: number;
    cardType: CardTypeEnum;
    cardJoiningFee: number;
    cardExpiry: number;
    cardLimit: number;
    joiningfee: JoiningFee[];
    cards: Card[];
    constructor() { }
}
