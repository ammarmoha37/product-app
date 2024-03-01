import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products/product.service';
import { Product } from '../services/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProductsWithLimit()
      .subscribe({
        next: (result) => {
          this.products = result;
        }
      });

  }

}
