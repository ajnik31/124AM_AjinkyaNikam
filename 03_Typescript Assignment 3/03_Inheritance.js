var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.PI = 3.14;
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return (this.PI * this.radius) * this.radius;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.circumference = function () {
        return 2 * this.PI * this.radius;
    };
    return CircleX;
}(Circle));
var circle1 = new CircleX(20);
var circle2 = new CircleX(30);
console.log("Area of Circle 1 with radius 20 is " + circle1.area());
console.log("Circumference of Circle 1 with radius 20 is " + circle1.circumference());
console.log("Area of Circle 2 with radius 30 is " + circle2.area());
console.log("Circumference of Circle 2 with radius 30 is " + circle2.circumference());
