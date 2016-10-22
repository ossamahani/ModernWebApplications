import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-products',
  templateUrl: 'app/products.component.html',
  styleUrls: ['app/products.component.css']
})

export class ProductsComponent implements OnInit { 
  title = 'Tour of Products';
  selectedProduct: Product;
  products : Product[];

  constructor(private productService : ProductService, private router: Router){}

  getProducts() : void {
     this.productService.getProducts().then(products=>this.products=products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product): void {
      this.selectedProduct = product;
    }

gotoDetail()
{
  let link = ['/detail', this.selectedProduct.id];
  this.router.navigate(link);
}  

@Output() deleteRequest = new EventEmitter<Product>();


delete(product: Product): void {
  this.productService
      .delete(product.id)
      .then(() => {
        this.products = this.products.filter(p => p !== product);
        if (this.selectedProduct === product) { this.selectedProduct = null; }
      });
}


add(name: string, price: number): void {
  name = name.trim();
  if (!name) { return; }
  this.productService.create(name, price)
    .then(product => {
      this.products.push(product);
      this.selectedProduct = null;
    });
}



}
