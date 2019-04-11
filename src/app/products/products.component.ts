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
  tableHeaders = ["sno", "productId", "name", "code", "manufacturerid", "price", "description", "quantity", "createdat", "username"]


  constructor(private productService: ProductServiceService,
    private router: Router) { }

  async ngOnInit() {
    const products = await this.productService.getProducts()
    this.products = products['products'];
    console.log(products)
  }


  navigateToAddProduct() {
    this.router.navigate(["products/addproduct"])
  }
  edit(id) {
    console.log(`product component printing ${id}`)
  }
}