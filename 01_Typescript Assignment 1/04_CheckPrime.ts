function ChkPrime(num:number):boolean{
    for(var i=2;i<=num/2;i++)
    {
        if(num%i==0){
            return false;
        }
    }
    return true;
}

var result:boolean;
result=ChkPrime(11);
if(result){
    console.log("It is prime number");
}else{
    console.log("It is NOT prime number");
}
