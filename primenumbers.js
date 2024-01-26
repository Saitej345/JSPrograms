
 
const PrimeNum =()=>{
    let arr1=[]
    for(let i=0;i<arr.length;i++){
        let count=1;
        for(let j=2;j<=arr[i];j++){
            if(arr[i]%j==0){
                count=count+1;
            } 
            
        }
        if(count==2){
            arr1.push(arr[i])

        }
    }
    return arr1
}
const arr=[3,35,33,11,32,19]
console.log(PrimeNum(arr));
