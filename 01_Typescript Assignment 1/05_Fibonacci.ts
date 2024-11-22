function Fibonacci(num: number): void {
    var no1: number = 0;
    var no2: number = 1;
    var temp: number = 0;
    while (temp <= num) {

        console.log(no2);
        temp = no1 + no2;
        no1 = no2;
        no2 = temp
    }
}


Fibonacci(21);