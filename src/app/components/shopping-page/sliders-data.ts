export class SlidersData {
    imgsrc: string;
    actualPrice: number;
    discountedPrice: number;
    productName: string;
    productDetails: string;
    paymentSuccess: string = " ";
    count: number;
    constructor() {
        this.imgsrc = " ";
        this.actualPrice = 12;
        this.discountedPrice = 12;
        this.productName = "xyz";
        this.productDetails = "abc";
        this.paymentSuccess = " ";
        this.count = 0;
    }
}
