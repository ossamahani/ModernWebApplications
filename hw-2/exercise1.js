var shape = {
           type:"Shape", 
           getType : function(){
             return this.type;
             }
        };
 

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = "Triangle";
}


Triangle.prototype = shape;

Triangle.prototype.getPerimeter = function (){
    return this.a + this.b + this.c;
};

var t = new Triangle(1,2,3);
console.log(t.constructor);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());
console.log(t.__proto__)
   

        