let year = 1000;
if( year % 400 == 0 ){
    console.log("Year is leap year");
} else if ( year % 100 == 0){
    console.log("Year is not leap year");
} else if (year % 4 == 0){
    console.log("Year is leap year");
} else {
    console.log("Year is not leap year");
}