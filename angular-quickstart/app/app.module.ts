import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductCalculatePricePipe } from './product-calculate-price.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductDetailComponent, ProductCalculatePricePipe, HighlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
