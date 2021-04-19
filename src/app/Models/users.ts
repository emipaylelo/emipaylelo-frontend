import { BankDetail } from "./bank-detail";
import { Card } from "./card";
import { JoiningFee } from "./joining-fee";
import { Order } from "./order";
import { Transaction } from "./transaction";

export class User {
    userId: number;
    userName: string;
    userMobileNo: string;
    userEmail: string;
    aadharNo: number;
    panNo: number;
    aadharUrl: string;
    panUrl: string;
    userPassword: string;
    isApproved: boolean;
    userAddress: string;
    bankdetail: BankDetail;
    joiningfee: JoiningFee;
    card: Card;
    orders: Order[];
    transactions: Transaction[];
    constructor() { }
}
