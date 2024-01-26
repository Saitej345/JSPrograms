let arr=[10,20,30,10,20,50,60];


for(let i=0; i<arr.length; i++){
    let count=0;
    for(let j=0; j<arr.length;j++){
        if(arr[i]==arr[j]){
            count=count+1;
        }
       }
       if(count>1){
        console.log(`number  ${arr[i]} repeats ${count} times`);

    } 
}