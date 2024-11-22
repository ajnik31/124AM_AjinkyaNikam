"use strict";
function Maximum(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
var max = 0;
max = Maximum(arr);
console.log("Maximum number is " + max);
