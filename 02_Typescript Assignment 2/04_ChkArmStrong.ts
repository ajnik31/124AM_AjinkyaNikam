var ChkArmStrong = (num: number): boolean => {
    var total: number = 0;
    var countOfDigits: number = 0;
    var temp: number = num;
    var singleDigit: number = 0;
    while (temp > 0) {
        countOfDigits++;
        temp = Math.floor(temp / 10);
    }

    temp = num;
    while (temp > 0) {
        singleDigit = temp % 10;
        temp = Math.floor(temp / 10);
        total = total + Math.pow(singleDigit, countOfDigits);
    }
    if(total==num){
        return true;
    }else{
        return false;
    }
}

var num: number = 8208;
if(ChkArmStrong(num)){
    console.log("It is Armstrong number")
}else{
    console.log("It is NOT Armstrong number")
}