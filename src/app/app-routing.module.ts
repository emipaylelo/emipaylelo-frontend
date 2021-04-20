import { LoginComponent } from './components/login/login.component';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UploadDocsComponent } from './components/upload-docs/upload-docs.component';
import { CardSelectionComponent } from './components/card-selection/card-selection.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { Transaction } from './Models/transaction';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  {
    path: "signup", component: SignUpComponent
  },
  {
    path: "bankdetails", component: BankDetailsComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "uploaddocs", component: UploadDocsComponent
  },
  {
    path: "cardselection", component: CardSelectionComponent
  },
  {
    path: "admindashboard", component: AdminDashboardComponent
  },
  {
    path: "profiledetails", component: ProfileDetailsComponent
  },
  {
    path: "orders", component: OrdersComponent
  },
  {
    path: "transactions", component: TransactionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
