class Arithmetic{
    number1:number;
    number2:number;

    constructor(no1:number,no2:number){
        this.number1=no1;
        this.number2=no2;
    }

    Addition(){
        return this.number1+this.number2;
    }
    Subtraction(){
        return this.number1-this.number2;
    }
    Multiplication(){
        return this.number1*this.number2;
    }
    Division(){
        return this.number1/this.number2;
    }
}

var circle1= new Arithmetic(20,10);
var circle2 = new Arithmetic(44,22);

console.log("First Object output - ");
console.log(circle1.Addition());
console.log(circle1.Subtraction());
console.log(circle1.Multiplication());
console.log(circle1.Division());

console.log("Second Object output - ");
console.log(circle2.Addition());
console.log(circle2.Subtraction());
console.log(circle2.Multiplication());
console.log(circle2.Division());