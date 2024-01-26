let arr1=[];
const positiveNum=()=>{
    for(let i=1;i<arr.length;i++){
        if(arr[i]>0){
          arr1.push(arr[i]);
        }
       
    }
    return arr1;
}
const arr=[0,1,2,0,0,5,88,5];
 var result=positiveNum(arr)
 console.log(result);
