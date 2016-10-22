"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('./product.service');
var router_1 = require('@angular/router');
var ProductsComponent = (function () {
    function ProductsComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.title = 'Tour of Products';
    }
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().then(function (products) { return _this.products = products; });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    ProductsComponent.prototype.gotoDetail = function () {
        var link = ['/detail', this.selectedProduct.id];
        this.router.navigate(link);
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'my-products',
            templateUrl: 'app/products.component.html',
            styleUrls: ['app/products.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map