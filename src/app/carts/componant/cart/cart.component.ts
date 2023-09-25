import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartstorge: any[] = []
  datastorge: any[] = []
  databinding:any
  carts: any[] = [];
  prodDeatails: any;
  dateForm!: FormGroup
  product: any[] = [];
  total: number = 0
  constructor(private cartser: CartService, private fb: FormBuilder, private producstser: ProductService) { }

  ngOnInit(): void {
    this.getCarts()
    this.intitForm()
  }

  intitForm() {
    this.dateForm = this.fb.group({
      start: ['' ||this.databinding?.start ],
      end: ['' || this.databinding?.end ]
    })
  }
  getCarts() {
    if('cartstorge' in localStorage){
      this.carts = JSON.parse(localStorage.getItem("cartstorge")!)
      this.databinding = JSON.parse(localStorage.getItem("datastorge")!)
      console.log(this.carts)
      console.log(this.databinding.start)
    }
  }
  applyfillter() {
    let date = this.dateForm.value;
    this.carts = []
    this.cartser.getCarts(date).subscribe((res: any) => {
      this.carts = res
      console.log(res)
      localStorage.setItem("cartstorge", JSON.stringify(res))
      localStorage.setItem("datastorge", JSON.stringify(date))
    },(error)=>{
      alert('Please Enter date')
    })
  }
  delete(id: number) {
    this.cartser.deleteItem(id).subscribe(res => {
      this.carts.splice(id - 1, 1)
      localStorage.setItem("cartstorge", JSON.stringify(this.carts))
      console.log(this.carts)
      this.getCarts()
      console.log(res)
    })
  }
  deatails(index: number) {
    this.product = []
    this.prodDeatails = this.carts[index]
    console.log(this.prodDeatails)
    for (let x in this.prodDeatails.products) {
      this.producstser.getProductById(this.prodDeatails.products[x].productId).subscribe((res: any) => {
        this.product.push({ item: res, quantity: this.prodDeatails.products[x].quantity })
        console.log(res)
        this.total = 0
      })
    }

  }
  getTotal() {

  }
}
