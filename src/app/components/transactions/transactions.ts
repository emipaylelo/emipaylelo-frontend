export class Transaction {
    transactionId: number;
    transactionDate: string;
    amount: number;
    cardNo: string;
    expiryDate: string;
    cvv: number;
    cardHolderName: string;
    remainingCredit: number;
    paymentDue: number;
    productId: number;
    productCategory: string;
    productName: string;
    productPrice: number;
    productImg: string;


    constructor() {
        this.transactionId = 34223490;
        this.amount = 2000;
        this.transactionDate = "12/12/2020";
        this.cardNo = "2332 2333 2222 1111";
        this.expiryDate = "5/21";
        this.cvv = 343;
        this.cardHolderName = "suchitra";
        this.remainingCredit = 2332;
        this.paymentDue = 2233;
        this.productId = 2233;
        this.productCategory = "electronics";
        this.productName = "samsung";
        this.productPrice = 6498;
        this.productImg = " ";

    }
}