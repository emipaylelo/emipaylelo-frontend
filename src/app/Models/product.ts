import { Order } from "./order";
import { ProductCategory } from "./product-category";

export class Product {
    productId: number;
    productName: string;
    productPrice: number;
    downPayment: number;
    productUrl: string;
    productCategory: ProductCategory;
    productDetails: string;
    orders: Order[];
    constructor() { }
}
