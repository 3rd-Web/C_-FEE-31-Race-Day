let raceNumber = Math.floor(Math.random() * 1000); // step 1

const registeredEarly = false; // step 2

const runnersAge = 27; // step 3

if (registeredEarly === true && runnersAge > 18) {
  raceNumber += 1000;
} // step 4 - if registered early and is over 18 will get a race number above 1000

// console.log(raceNumber); // testing logic

if (registeredEarly === true && runnersAge > 18) {
  console.log(
    `Thank you for registering early! Your race start time is at 9:30 AM. Your race number is ${raceNumber}.`
  );
} else if (registeredEarly !== true && runnersAge > 18) {
  console.log(
    `We're sorry that you've missed our early registration. Your race start time is at 11:00 AM. Your race number is ${raceNumber}.`
  );
} else if (runnersAge < 18) {
  console.log(
    `We want to welcome all of our future (marathon) runners! Your start time is at 12:30 PM. Your racenumber is ${raceNumber}.`
  );
} else {
  console.log(
    'Please check-in with our registration desk.'
  );
}; // steps 5 thru 9 all logic with different variables checked out.
