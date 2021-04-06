import { Product } from './products';
import { Component, OnInit } from '@angular/core';
import { OrdersData } from './orders';
import { Transaction } from './transactions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  order: OrdersData = new OrdersData();

  transactions: Transaction[] = [{

    cardNo: "3343 4433 222 44",
    transactionDate: "20/12/2020",
    amount: 2000,
    expiryDate: "5/21",
    cvv: 343,
    cardHolderName: "suchitra",
    remainingCredit: 2332,
    paymentDue: 2233,
    transactionId: 334465,
    productId: 2233,
    productCategory: "electronics",
    productName: "samsung",
    productPrice: 6498,
    productImg: "../../../assets/samsung.jpg"
  }, {
    cardNo: "4566 4433 222 44",
    transactionDate: "1/11/2021",
    amount: 2000,

    expiryDate: "5/21",
    cvv: 111,
    cardHolderName: "suchitra",
    remainingCredit: 2332,
    paymentDue: 2233,
    transactionId: 111111,
    productId: 2233,
    productCategory: "electronics",
    productName: "samsung",
    productPrice: 6498,
    productImg: "../../../assets/samsung.jpg"
  }, {
    cardNo: "4545 4433 222 44",
    transactionDate: "04/01/2020",
    amount: 2000,

    expiryDate: "5/21",
    cvv: 343,
    cardHolderName: "suchitra",
    remainingCredit: 2332,
    paymentDue: 2233,
    transactionId: 222222,
    productId: 2233,
    productCategory: "electronics",
    productName: "samsung",
    productPrice: 6498,
    productImg: "../../../assets/samsung.jpg"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
