export class OrdersData {
    cardNo: string;
    expiryDate: string;
    cvv: number;
    cardHolderName: string;
    remainingCredit: number;
    paymentDue: number;
    constructor() {
        this.cardNo = "2332 2333 2222 1111";
        this.expiryDate = "5/21";
        this.cvv = 343;
        this.cardHolderName = "suchitra";
        this.remainingCredit = 2332;
        this.paymentDue = 2233;

    }
}