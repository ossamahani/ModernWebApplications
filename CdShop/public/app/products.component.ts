import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-products',
  templateUrl: 'app/products.component.html',
  styleUrls: ['app/products.component.css'],
})

export class ProductsComponent implements OnInit { 
  selectedProduct: Product;
  products : Product[];
  cart : Product[] = [];


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

delete(product: Product): void {
  this.productService
      .delete(product.id)
      .then(() => {
        this.products = this.products.filter(p => p !== product);
        if (this.selectedProduct === product) { this.selectedProduct = null; }
      });
}


 addToCart(product: Product):void {
    let exist = false;
		this.cart.forEach(function(item){
			if (item.id === product.id)
			{
				item.quantity++;
				exist = true;
			}		
		});
		
		if (!exist)
		{			
			product.quantity = 1;
			this.cart.push(product);
		}
 }

 removeFromCart(index:number)
 {	
   if (this.cart[index].quantity === 1)
		  	this.cart.splice(index, 1);
		else
				this.cart[index].quantity--;	
 };


 totalPrice() : number
	{
		var total = 0.0;
		this.cart.forEach(function(item){	
			total+=item.price * item.quantity;		
		});
		return total;
	};

add(id:number, title: string, artist:string, price: number): void {
  title = title.trim();
  if (!title) { return; }
  this.productService.create(id, title, artist, price)
    .then(product => {
      this.products.push(product);
      this.selectedProduct = null;
    });
}



}
