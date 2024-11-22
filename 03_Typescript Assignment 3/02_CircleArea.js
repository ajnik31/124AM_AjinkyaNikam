class Circle {
    constructor(radius) {
        this.PI = 3.14;
        this.radius = radius;
    }
    area() {
        return this.PI * this.radius * this.radius;
    }
}
var circle1 = new Circle(20);
var circle2 = new Circle(30);
console.log("Area of Circle 1 with radius 20 is " + circle1.area());
console.log("Area of Circle 2 with radius 30 is " + circle2.area());
