class Circle{
    radius:number;
    PI:number = 3.14;

    constructor(radius:number){
        this.radius = radius;
    }

    area(){
        return this.PI*this.radius*this.radius;
    }
}

class CircleX extends Circle{
    circumference(){
        return 2*this.PI*this.radius;
    }
}


var circle1 = new CircleX(20);
var circle2 = new CircleX(30);

console.log("Area of Circle 1 with radius 20 is "+circle1.area())
console.log("Circumference of Circle 1 with radius 20 is "+circle1.circumference())

console.log("Area of Circle 2 with radius 30 is "+circle2.area())
console.log("Circumference of Circle 2 with radius 30 is "+circle2.circumference())