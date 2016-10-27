import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'my-product-detail',
  templateUrl: 'app/product-detail.component.html'
  //styleUrls: [ 'app/product-detail.component.css' ]

})


export class ProductDetailComponent implements OnInit{
  @Input()
  product: Product;
  quantity=1;

  constructor(
  private productService: ProductService,
  private route: ActivatedRoute,
  private location: Location
) {}


ngOnInit() : void
{
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.productService.getProduct(id)
      .then(product => this.product = product);
  });
}

save(): void {
  this.productService.update(this.product)
    .then(() => this.goBack());
}


goBack(): void{
  this.location.back();
}

}


