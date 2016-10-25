import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'calculatePrice'})
export class ProductCalculatePricePipe implements PipeTransform{
 transform(unitPrice: number, quantity: string): number {
      return unitPrice * parseFloat(quantity);
  }
}