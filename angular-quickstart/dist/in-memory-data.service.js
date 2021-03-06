"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            { id: 11, name: 'Iphone', price: 500 },
            { id: 12, name: 'Samsung Tablet', price: 600 },
            { id: 13, name: 'Samsung Note3', price: 800 },
            { id: 14, name: 'Lenovo', price: 200 },
            { id: 15, name: 'HP', price: 900 },
            { id: 16, name: 'DELL Latitude', price: 1200 },
            { id: 17, name: 'Toshiba', price: 400 },
            { id: 18, name: 'ACER', price: 500 },
            { id: 19, name: 'Mac Notebook', price: 1400 },
            { id: 20, name: 'Kindle', price: 150 },
            { id: 20, name: 'Dell Insprion', price: 100 }
        ];
        return { products: products };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map