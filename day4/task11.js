function checkPrime(num) {
    let flag = true;
    if(num<2) flag = false;
    let i=2;
    while(i<=num/2){
        if(num%i == 0) {
            flag = false;
            break;
        }
        i++;
    }
    return flag;
}
let j=0;
while(j<=50){
    if(checkPrime(j))
        console.log(j);
    j++;
}