import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Product } from './product';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class ProductService {
     
    constructor(private http: Http) { }

     private productsUrl = 'app/products';

     getProducts(): Promise<Product[]> { 
       return this.http.get(this.productsUrl)
               .toPromise()
               .then(response => response.json().data as Product[])
               .catch(this.handleError);
     } 


     getProduct(id:number): Promise<Product>{
       return this.getProducts().then(products=>products.find(product=>product.id===id));
     }


     private headers = new Headers({'Content-Type': 'application/json'});

    update(product: Product): Promise<Product> {
    const url = `${this.productsUrl}/${product.id}`;
     return this.http
        .put(url, JSON.stringify(product), {headers: this.headers})
        .toPromise()
        .then(() => product)
        .catch(this.handleError);
      }


      create(cd:Product): Promise<Product> {
      return this.http
         .post(this.productsUrl, JSON.stringify({id:cd.id,title: cd.title, artist: cd.artist, price: cd.price}), {headers: this.headers})
         .toPromise()
         .then(res => res.json().data)
         .catch(this.handleError);
      }

      delete(id: number): Promise<void> {
      const url = `${this.productsUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
  }

   addToCart(id:number, title: string, artist:string, price:number): Promise<Product> {
      return this.http
         .post(this.productsUrl, JSON.stringify({id:id,title: title, artist: artist, price: price}), {headers: this.headers})
         .toPromise()
         .then(res => res.json().data)
         .catch(this.handleError);
      }





  private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
}

}