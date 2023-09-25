import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  id:any
  prodId : any = {}
  loading:boolean = false ;
  constructor(private activatRoute:ActivatedRoute,private apiServ:ProductService) {
    this.id = this.activatRoute.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.getProductById()
  }
  getProductById(){
    this.loading = true
    this.apiServ.getProductById(this.id).subscribe( data =>{
      this.loading = false
      this.prodId = data
    },error => {
      this.loading =false
      alert(error)
    })
  }

}
