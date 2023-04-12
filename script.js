/* Declaring a variable and name it raceNumber, setting it's value to a mathematic function that gives us a random number between 0 and 1 and 
multiplying it by 1000. So it will generate a random number between 1 and 999. We also round it down with .floor. */
let raceNumber = Math.floor(Math.random() * 1000);

// Declaring a variable and name it registeredEarly with a bolean value.
let registeredEarly = false;

// Declaring a variable and name it age, value is a number under 18, over 18 or 18.
let age = 38;

// An if statmend that checks if registeredEarly i truthy and if age is greater than 18, if so, add 1000 to raceNumber.
if (registeredEarly && age > 18) {
  raceNumber += 1000;
}

/* If statement with two conditions,if both are truthy (logical AND operator), print a message with template literal that also includes racenumber. 
   Then an else statement with same drill.*/
if (registeredEarly && age > 18) {
  console.log(`You will start at 9:30 am. Your racenumber is ${raceNumber}.`)
} else if (!registeredEarly && age > 18) {
  console.log(`You will start att 11:00 am. Your racenumber is ${raceNumber}.`)
}

/* If statement with one condition, if it's truthy, print a message with template literal that also includes racenumber. 
   Else statement that tells persons that are exactly 18 to go to registration desk. */
if (age < 18) {
  console.log(`You will start at 12:30 pm. Your racemnumber is ${raceNumber}.`);
} else if (age === 18) {
  console.log('Please go to the registration desk')
}
