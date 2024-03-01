import { Component } from '@angular/core';
import { Product } from '../services/models/product';
import { ProductService } from '../services/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {

  // Note: the product will not be displayed since
  // it is a fake api and mentioned in the doc that
  // it can not be added to the database

  product: Product = {};

  constructor(private productService: ProductService,
              private router: Router) { }

  saveProduct() {
    this.productService.createProduct(this.product)
      .subscribe({
        next: (result) => {
          this.router.navigate(['products']);
        }
      });
  }
}
