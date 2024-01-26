


const Countarr =()=>{

    const a=[1,2,0,0,5,6];


    var count=0;
    for(let i=0;i<=a.length;i++){
        if(a[i]==0){
            count=count+1;
        }
    }
  console.log(count);

}
Countarr();