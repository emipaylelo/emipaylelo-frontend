import { Card } from "./card";
import { Order } from "./order";
import { TransactionType } from "./transaction-type";
import { User } from "./users";

export class Transaction {
    transactionId: number;
    amount: number;
    transactionType: TransactionType;
    transactionPaymentDate: Date;
    transactionDueDate: Date;
    transactionStatus: boolean;
    user: User;
    card: Card;
    order: Order;
    constructor() { }
}
