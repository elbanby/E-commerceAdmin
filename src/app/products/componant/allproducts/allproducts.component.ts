import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  products: any[] = []
  categoris: any[] = []
  loading: boolean = false
  cartItem: any[] = []
  form!: FormGroup
  constructor(private apiServ: ProductService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.doGetAllProduct();
    this.getCatogris();
    this.initForm()
    // this.getCatogry();
  }

  initForm() {
    this.form = this.fb.group({
      title: [''],
      price: [''],
      decription: [''],
      image: [''],
      category: [''],
    })
  }
  doGetAllProduct() {
    this.apiServ.getAllProducts().subscribe(data => {
      this.products = data
    }, Error => {
      alert('error')
    })
  }
  getCatogris() {
    this.apiServ.getCatogris().subscribe(data => {
      this.categoris = data
    })
  }
  getSelectedCatigories(event: any) {
    this.form.get('category')?.setValue(event.target.value)
  }
  addItem() {
    let model = this.form.value
    this.apiServ.postItem(model).subscribe(res => {
      console.log(res)
      this.products.unshift(res)
    })
  }
}
