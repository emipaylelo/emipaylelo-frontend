export class CardSelectData {
    cardType: string;
    totalCredit: number;
    joiningFee: number;

    constructor(cardType: string, totalCredit: number, joiningFee: number) {
        this.cardType = cardType;
        this.joiningFee = joiningFee;
        this.totalCredit = totalCredit;
    }
}
