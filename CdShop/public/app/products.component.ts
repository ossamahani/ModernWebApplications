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
  active = true;
  cd : Product = new Product();
  newProduct() {
    this.cd = new Product();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  


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

add(cd:Product): void {
  this.productService.create(cd)
    .then(product => {
      this.products.push(product);
      this.selectedProduct = null;
      this.newProduct();
    });
}



}
