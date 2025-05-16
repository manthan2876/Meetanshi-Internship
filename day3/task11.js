function getZodiacSign(day, month) {
  if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
    return "♑";
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
    return "♒";
  } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
    return "♓";
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return "♈";
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return "♉";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    return "♊";
  } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    return "♋";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return "♌";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return "♍";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    return "♎";
  } else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
    return "♏";
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    return "♐";
  }
}

const day = parseInt(prompt("Enter the day of your birth:"));
const month = parseInt(prompt("Enter the month of your birth (1-12):"));

if ((isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) || ((day==30 || day==31) && month == 2)) {
  console.log("Invalid date input.");
} else {
  const sign = getZodiacSign(day, month);
  console.log("Your zodiac sign is: " + sign);
}