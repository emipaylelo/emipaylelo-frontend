import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UploadDocsComponent } from './components/upload-docs/upload-docs.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { PaymentSuccessfulComponent } from './components/payment-successful/payment-successful.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ErrorComponent } from './components/error/error.component';
import { CardSelectionComponent } from './components/card-selection/card-selection.component';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
<<<<<<< HEAD
import { ModalModule } from 'ngb-modal';
import { ShoppingPageComponent } from './components/shopping-page/shopping-page.component';
=======
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
>>>>>>> 22c3aad3e40a6b3722cd326c6c69e7207886eeec



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    UploadDocsComponent,
    TransactionsComponent,
    PaymentSuccessfulComponent,
    OrdersComponent,
    ForgotPasswordComponent,
    ErrorComponent,
    CardSelectionComponent,
    BankDetailsComponent,
    AdminDashboardComponent,
    FileUploadComponent,
<<<<<<< HEAD
    ShoppingPageComponent,

=======
    ProfileDetailsComponent,
    NavbarComponentComponent
>>>>>>> 22c3aad3e40a6b3722cd326c6c69e7207886eeec
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
