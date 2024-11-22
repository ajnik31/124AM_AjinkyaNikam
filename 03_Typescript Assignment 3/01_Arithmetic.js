var Arithmetic = /** @class */ (function () {
    function Arithmetic(no1, no2) {
        this.number1 = no1;
        this.number2 = no2;
    }
    Arithmetic.prototype.Addition = function () {
        return this.number1 + this.number2;
    };
    Arithmetic.prototype.Subtraction = function () {
        return this.number1 - this.number2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.number1 * this.number2;
    };
    Arithmetic.prototype.Division = function () {
        return this.number1 / this.number2;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(20, 10);
var obj2 = new Arithmetic(44, 22);
console.log("First Object output - ");
console.log(obj1.Addition());
console.log(obj1.Subtraction());
console.log(obj1.Multiplication());
console.log(obj1.Division());
console.log("Second Object output - ");
console.log(obj2.Addition());
console.log(obj2.Subtraction());
console.log(obj2.Multiplication());
console.log(obj2.Division());
