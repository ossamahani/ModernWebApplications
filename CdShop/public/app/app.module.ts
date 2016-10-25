import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }   from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent }   from './products.component';
import { DashboardComponent }   from './dashboard.component';
import { ProductSearchComponent }   from './product-search.component';

import { ProductCalculatePricePipe } from './product-calculate-price.pipe';
import { HighlightDirective } from './highlight.directive';
import { ProductService } from './product.service';

 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    ],
  declarations: [ AppComponent, ProductDetailComponent, ProductsComponent, DashboardComponent, ProductSearchComponent, ProductCalculatePricePipe, HighlightDirective ],
  bootstrap:    [ AppComponent ],
  providers:    [ ProductService ]
})
export class AppModule { }


