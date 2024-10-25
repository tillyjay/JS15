const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


//select elements
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

//set up future date: May 24, 2024, at 11:30 AM (month 0-indexed, 4 represents May)
let futureDate = new Date(2024,4,13,11,30,0);
//get year, hour, mins of future date
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

//use month index to get month name from months array
const month = futureDate.getMonth();
const monthName = months[month];

//get day of month (1-31)
const day = futureDate.getDate();

//get weekday from weekdays array
const weekDay = weekdays[futureDate.getDay()];

//display formatted date in ele giveaway
giveaway.textContent = `giveaway ends on ${weekDay}, ${day} ${monthName} ${year}, ${hours}:${mins}am`;


//calculate time left until giveaway end 



