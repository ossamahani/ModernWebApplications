Array.prototype.odd = function(){
     return this.filter(value => value % 2 == 1)
};


Array.prototype.even = function(){
     return this.filter(value => value % 2 == 0) 
};



const numbers = [1,2,3,4,5,6,7,8];

console.log(numbers.odd());
console.log(numbers.even());


