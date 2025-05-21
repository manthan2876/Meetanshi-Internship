const account = [{
    amount : 1000,
    type : "deposit"
},{
    amount : 1000,
    type : "deposit"
},{
    amount : 500,
    type : "withdrawal"
},{
    amount : 500,
    type : "withdrawal"
},{
    amount : 500,
    type : "withdrawal"
},{
    amount : 200,
    type : "withdrawal"
},{
    amount : 500,
    type : "withdrawal"
},{
    amount : 500,
    type : "withdrawal"
}];
let balance = 0;
(function trackBalance(transactions){
    transactions.forEach(element => {
        if(element.type === "deposit"){
            balance += element.amount;
        } else if(element.type === "withdrawal"){
            if((balance - element.amount)>=0){
            balance -= element.amount;
            } else {
                console.log("Withdrawal is not possible..");
            }
        }
    });
})(account);

console.log("Final balance: ",balance);