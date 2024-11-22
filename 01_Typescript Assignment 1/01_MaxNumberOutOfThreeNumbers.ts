function maximum(no1:number,no2:number,no3:number): number{
    var max:number = 0;

    if(no1>no2){
        max = no1;
    }else if(no2>no1){
        max=no2;
    }

    if(no3>max){
        max=no3;
    }

    return max;
}

var maximunNumber = maximum(23,89,6);
console.log("Maximun number is - "+maximunNumber);
