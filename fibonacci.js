function fib(n) {
    let n1=0;
    let n2=1;
      
   let arr=[];
    arr.push(n1);
    arr.push(n2);
    console.log(n2);
    for(let i=1;i<10;i++){
        n3=n1+n2;
        arr.push(n3);
        n1=n2;
        n2=n3;

    }
    return arr;
   
}
console.log(fib(5)); 