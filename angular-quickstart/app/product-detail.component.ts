import { Component, Input } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'my-product-detail',
  template: `
  <div *ngIf="product">
    <h2>{{product.name}} details!</h2>
    <div><label>id: </label><label myHighlight>{{product.id}}</label></div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="product.name" placeholder="name"/>
    </div>
    <div>quantity: <input [(ngModel)]="quantity"></div>
    <div>
      <label>total price: </label>
      <label myHighlight>{{ product.price | calculatePrice : quantity }}</label>
    </div>

  </div>
`
})


export class ProductDetailComponent {
  @Input()
  product: Product;
  quantity=1;
}


