function checkPrefect(num){
    let result =0;
    for(let i=1;i<=num/2;i++){
        if(num%i==0){
            result+=i;
        }
    }
    return result===num ? true : false;
}
let count = 0;

for(let j=1;count<6;j++){
    if(checkPrefect(j)){
        console.log(j);
        count++;
    }
    console.log(j);
}