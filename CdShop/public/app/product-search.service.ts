import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Product }           from './product';
@Injectable()
export class ProductSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Product[]> {
    return this.http
               .get(`app/products/?title=${term}`)
               .map((r: Response) => r.json().data as Product[]);
  }
}
