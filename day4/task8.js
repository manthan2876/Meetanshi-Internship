const amount = parseInt(prompt("Enter total amount: "));

amount>100 ? console.log("Discount is applicable, Total amount = ",amount-(amount*.1)) : console.log("Discount isn't applicable, Total amount = ",amount);