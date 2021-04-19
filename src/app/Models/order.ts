import { Card } from "./card";
import { Product } from "./product";
import { Transaction } from "./transaction";
import { User } from "./users";

export class Order {
    orderId: number;
    orderAmount: number;
    tenure: number;
    orderDate: Date;
    shippingAddress: string;
    user: User;
    product: Product;
    card: Card;
    transactions: Transaction[];
    constructor() { }
}
