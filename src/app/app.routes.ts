import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
    {
        path : "Home",
        component : HomeComponent
    },
    {
        path : "",
        pathMatch : "full",
        component : HomeComponent
    },
    {
        path : "Products",
        component : ProductsComponent
    },
    {
        path : "Products-details",
        component : ProductsDetailsComponent
    },
    {
        path : "Login",
        component : LoginComponent
    },
    {
        path : "Signup",
        component : SignupComponent
    },
    {
        path : "Contact",
        component : ContactUsComponent
    },
    {
        path : "Cart",
        component : CartComponent
    },
    {
        path : "Continue Shopping",
        component : ProductsComponent
    },
    {
        path : "Checkout",
        component : CheckoutComponent
    },

];
