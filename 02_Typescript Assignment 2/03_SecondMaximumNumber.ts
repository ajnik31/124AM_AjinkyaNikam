function Maximum(arr:number[]):number{
    var firstMax:number=arr[0];
    var secondMax:number=0;

    for(var i=1;i<arr.length;i++){
        if(firstMax<arr[i]){
            secondMax=firstMax;
            firstMax=arr[i];
        }
        if(secondMax<arr[i] && firstMax>arr[i]){
            secondMax=arr[i];
        }
    }

    return secondMax;
}

var arr:number[]=[23,6,29,56,45,77,89,32];
console.log("Second Maximum Number is "+Maximum(arr));