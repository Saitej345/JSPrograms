function factorial(num) {
    if(num==0 || num==1){
        return 1;

    }
    else{
        fact=num*factorial(num-1);
        return fact;
    }

}
var result =factorial(8);
console.log(result);

 let number=7;
 var factorial=1;
 for(let i=1;i<=number;i++){
    factorial=factorial*i;
 }
 console.log(factorial);
