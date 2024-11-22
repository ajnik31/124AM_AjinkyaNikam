"use strict";
var ChkArmStrong = (num) => {
    var total = 0;
    var countOfDigits = 0;
    var temp = num;
    var singleDigit = 0;
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
    if (total == num) {
        return true;
    }
    else {
        return false;
    }
};
var num = 8208;
if (ChkArmStrong(num)) {
    console.log("It is Armstrong number");
}
else {
    console.log("It is NOT Armstrong number");
}
