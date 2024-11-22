function DisplayFactors(no:number){
    for(var i=0;i<=no/2;i++){
        if(no%i==0){
            console.log(i);
        }
    }
}

DisplayFactors(20);