import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = []
  tableHeaders = ["sno", "name", "price", "model", "country"]


  constructor(private productService: ProductServiceService) { }

  async ngOnInit() {
    const products = await this.productService.getProducts()
    this.products = products['products'];
    console.log(products)
  }


  navigateToAddProduct() {
    //  this.router.navigate(["products/addproduct"])
  }
}