import { Component, OnInit } from '@angular/core';
import { OrdersData } from './orders';
import { Product } from './products';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  order: OrdersData = {
    cardNo: "3343 4433 222 44",
    expiryDate: "5/21",
    cvv: 343,
    cardHolderName: "suchitra",
    remainingCredit: 2332,
    paymentDue: 2233
  }
  product: Product =
    {
      productId: 2233,
      productCategory: "electronics",
      productName: "samsung",
      productPrice: 6498,
      productImg: "../../../assets/samsung.jpg"
    }

  constructor() { }

  ngOnInit(): void {
  }

}
