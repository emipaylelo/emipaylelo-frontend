import { SlidersData } from './sliders-data';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {

  title = 'appBootstrap';

  closeResult: string = " ";


  constructor(config: NgbCarouselConfig, private modalService: NgbModal, private router: Router) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  mobiles1: SlidersData[] = [{
    imgsrc: "../../../assets/8t.png",
    actualPrice: 69999,
    discountedPrice: 54999,
    productName: "One Plus 8T",
    productDetails: "Dimension :Height: 16.07cm Width: 7.41cm Thickness: 0.84cm Weight: 188gm. Display Parameter: Size: 16.637 centimeters (6.55 inches) (measured diagonally from corner to corner)"
    , paymentSuccess: " ", count: 0
  },
  {
    imgsrc: "../../../assets/pixelproddetl.jpg",
    actualPrice: 55000,
    discountedPrice: 48999,
    productName: "google pixel 5",
    productDetails: " iPhone 12 (15.49 cm, 1 N) pricing is after trade-in of iPhone XR 64GB and is computed on MRP. Trade-in values vary based on the condition, year, and configuration of your trade-in device. You must be at least 18 years old. Additional terms from Apple or Appleâ€™s trade-in partner may apply. Monthly pricing is based on purchase amount after deduction of trade in amount using credit card EMI at 14% pa over a 9 month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your bank, subject to your bankâ€™s terms and conditions."
    , paymentSuccess: " ", count: 1
  },
  {
    imgsrc: "../../../assets/iphoneproddetl.jpg",
    actualPrice: 75000,
    discountedPrice: 63499,
    productName: "Apple iPhone s12",
    productDetails: "unlocked Android phone gives you the flexibility to change carriers and choose your own data plan;  "
    , paymentSuccess: " ", count: 2
  },
  {
    imgsrc: "../../../assets/Samsung-Galaxy-S20-Plus-500x500.jpg",
    actualPrice: 20000,
    discountedPrice: 16000,
    productName: "Samsung note 12",
    productDetails: "hile the screen is protected with Corning Gorilla Glass 6, it provides additional features such as HDR10+, Always-on display, and 120Hz. There is no 3.5 mm jack. "
    , paymentSuccess: " ", count: 3
  }

  ]
  washingMachines: SlidersData[] = [{
    imgsrc: "../../../assets/samsung-washing-machine.jpg",
    actualPrice: 35000,
    discountedPrice: 29000,
    productName: "Samsung Washing Machine",
    productDetails: "Fully-automatic front load washing machine: Best Wash Quality, Energy and Water efficient Capacity 7 kg : Suitable for families with 3 to 4 members, 165 degree swing door Warranty: 2 years on product, 10 years on motor 1200 rpm: Higher the spin speed, faster the drying time Special Features: Express wash, Large LED display Special Features: Anti - vibration design "
    , paymentSuccess: " ", count: 0
  },
  {
    imgsrc: "../../../assets/whirlpool-washing-machine.jpg",
    actualPrice: 40000,
    discountedPrice: 36000,
    productName: "WhirlPool Washing Machine",
    productDetails: "Fully-automatic front load washing machine: Best Wash Quality, Energy and Water efficient Capacity 7 kg : Suitable for families with 3 to 4 members, 165 degree swing door Warranty: 2 years on product, 10 years on motor 1200 rpm: Higher the spin speed, faster the drying time Special Features: Express wash, Large LED display Special Features: Anti - vibration design "
    , paymentSuccess: " ", count: 1
  },
  {
    imgsrc: "../../../assets/bosch.jpg",
    actualPrice: 45000,
    discountedPrice: 44000,
    productName: "Bosch Washing Machine",
    productDetails: "Fully-automatic front load washing machine: Best Wash Quality, Energy and Water efficient Capacity 7 kg : Suitable for families with 3 to 4 members, 165 degree swing door Warranty: 2 years on product, 10 years on motor 1200 rpm: Higher the spin speed, faster the drying time Special Features: Express wash, Large LED display Special Features: Anti - vibration design ",
    paymentSuccess: " ", count: 2
  },
  {
    imgsrc: "../../../assets/ifb-washing-machines-500x500.jpg",
    actualPrice: 35000,
    discountedPrice: 26000,
    productName: "IFB Washing Machine",
    productDetails: "Fully-automatic front load washing machine: Best Wash Quality, Energy and Water efficient Capacity 7 kg : Suitable for families with 3 to 4 members, 165 degree swing door Warranty: 2 years on product, 10 years on motor 1200 rpm: Higher the spin speed, faster the drying time Special Features: Express wash, Large LED display Special Features: Anti - vibration design ",
    paymentSuccess: " ", count: 3
  }]
  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  payMoney(index: number) {
    alert("Payment Successful");
    this.mobiles1[index].paymentSuccess = "Payment Successful";

  }
  payMoneyWC(index: number) {
    alert("Payment Successful");
    this.washingMachines[index].paymentSuccess = "Payment Successful";

  }
  viewDetails() {
    // this.router.navigate(['/productdetails']);

  }
}


