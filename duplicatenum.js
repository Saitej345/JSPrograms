let arr=[10,20,30,10,60,10,9,20,30];
let newarr=[];
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length;j++){
        if(arr[j]!=arr[i]){
         newarr.push(arr[j])
        }
     
       }
    
}
console.log(newarr);



