import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent }   from './products.component';
import { DashboardComponent }   from './dashboard.component';

import { ProductCalculatePricePipe } from './product-calculate-price.pipe';
import { HighlightDirective } from './highlight.directive';
import { ProductService } from './product.service';
import { AppRoutingModule }     from './app-routing.module';
 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ],
  declarations: [ AppComponent, ProductDetailComponent, ProductsComponent, DashboardComponent, ProductCalculatePricePipe, HighlightDirective ],
  bootstrap:    [ AppComponent ],
  providers:    [ProductService],
})
export class AppModule { }


