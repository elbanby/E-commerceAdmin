import { CartComponent } from './carts/componant/cart/cart.component';
import { AllproductsComponent } from './products/componant/allproducts/allproducts.component';
import { ProductdetailsComponent } from './products/componant/productdetails/productdetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , component:CartComponent},
  {path:'allProducts' , component:AllproductsComponent},
  {path:'details/:id' , component:ProductdetailsComponent},
  {path:'carts' , component:CartComponent},
  {path:'**' , redirectTo:'carts' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
