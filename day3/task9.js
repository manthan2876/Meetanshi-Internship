let planet = prompt("Enter planet number:");

console.log(typeof planet);
switch(planet){
    case "1":
        console.log("Distance of Mercury from sun is 57,900,000.");
        break;
    case "2":
        console.log("Distance of Venus from sun is 108,200,000.");
        break;
    case "3":
        console.log("Distance of Earth from sun is 149,600,000.");
        break;
    case "4":
        console.log("Distance of Mars from sun is 227,900,000.");
        break;
    case "5":
        console.log("Distance of Jupiter from sun is 778,600,000.");
        break;
    case "6":
        console.log("Distance of Saturn from sun is 1,433,500,000.");
        break;
    case "7":
        console.log("Distance of Uranus from sun is 2,872,500,000.");
        break;
    case "8":
        console.log("Distance of Neptune from sun is 4,495,100,000.");
        break;
    default:
        console.log("Enter valid planet number");
}