let year = parseInt(prompt("Enter year: "));

year % 400 == 0 ? console.log("Year is leap year") : year % 100 == 0 ? console.log("Year is not leap year") : year % 4 == 0 ? console.log("Year is leap year") : console.log("Year is not leap year");