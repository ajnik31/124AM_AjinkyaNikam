function Maximum(arr:number[]):number{
    var max:number=arr[0];
    for(var i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}

var arr:number[]=[23,89,6,29,56,45,77,32];
var max:number=0;
max = Maximum(arr);
console.log("Maximum number is "+max);