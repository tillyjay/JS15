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
const items = document.querySelectorAll('.deadline-format h4'); // Assuming you have multiple h4 elements

//set up future date: May 13, 2025, at 11:30 AM (month 0-indexed, 4 represents May)
let futureDate = new Date(2025, 4, 13, 11, 30, 0);

//display formatted date in giveaway element
const displayFutureDate = () => {
  const year = futureDate.getFullYear();
  const month = futureDate.getMonth();
  const monthName = months[month];
  const day = futureDate.getDate();
  const weekDay = weekdays[futureDate.getDay()];
  const hours = futureDate.getHours();
  const mins = futureDate.getMinutes();

  giveaway.textContent = `Giveaway ends on ${weekDay}, ${day} ${monthName} ${year}, at ${hours}:${mins}am`;
};

//update countdown
const updateCountdown = () => {
  //get current date
  const currentDate = new Date();

  //calc difference in milliseconds 
  const differenceInMs = futureDate - currentDate;

  //check if countdown is complete
  if (differenceInMs <= 0) {
    //stop countdown
    clearInterval(intervalId);
    giveaway.textContent = "Giveaway has ended!";
    //set all items to 0
    items.forEach(item => item.textContent = "0"); 
    return;
  }

  //convert milliseconds to days, hours, minutes, and seconds
  const daysLeft = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  const remainAfterDays = differenceInMs % (1000 * 60 * 60 * 24);
  const hoursLeft = Math.floor(remainAfterDays / (1000 * 60 * 60));
  const remainAfterHours = remainAfterDays % (1000 * 60 * 60);
  const minsLeft = Math.floor(remainAfterHours / (1000 * 60));
  const remainAfterMins = remainAfterHours % (1000 * 60);
  const secsLeft = Math.floor(remainAfterMins / 1000);

  // console.log(`Days left: ${daysLeft}, Hours left: ${hoursLeft}, Minutes left: ${minsLeft}, Seconds left: ${secsLeft}`);

  //create arry to hold time left vals
  const timeLeft = [daysLeft, hoursLeft, minsLeft, secsLeft];

  //update each item using timeLeft array
  items.forEach((item, index) => {
    //update with corresponding val
    item.textContent = timeLeft[index];
  });
};

//call func to display future date
displayFutureDate();

//set interval to update countdown every second
const intervalId = setInterval(updateCountdown, 1000);

//call func once to set initial countdown value
updateCountdown();



//alternative method
// const giveaway = document.querySelector('.giveaway');
// const deadline = document.querySelector('.deadline');
// const items = document.querySelectorAll('.deadline-format h4');

// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();
// // months are ZERO index based;
// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// // let futureDate = new Date(2020, 3, 24, 11, 30, 0);

// const year = futureDate.getFullYear();
// const hours = futureDate.getHours();
// const minutes = futureDate.getMinutes();

// let month = futureDate.getMonth();
// month = months[month];
// const weekday = weekdays[futureDate.getDay()];
// const date = futureDate.getDate();
// giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// const futureTime = futureDate.getTime();
// function getRemaindingTime() {
//   const today = new Date().getTime();

//   const t = futureTime - today;
//   // 1s = 1000ms
//   // 1m = 60s
//   // 1hr = 60m
//   // 1d = 24hr
//   // values in miliseconds
//   const oneDay = 24 * 60 * 60 * 1000;
//   const oneHour = 60 * 60 * 1000;
//   const oneMinute = 60 * 1000;
//   // calculate all values
//   let days = t / oneDay;
//   days = Math.floor(days);
//   let hours = Math.floor((t % oneDay) / oneHour);
//   let minutes = Math.floor((t % oneHour) / oneMinute);
//   let seconds = Math.floor((t % oneMinute) / 1000);

//   // set values array
//   const values = [days, hours, minutes, seconds];
//   function format(item) {
//     if (item < 10) {
//       return (item = `0${item}`);
//     }
//     return item;
//   }

//   items.forEach(function (item, index) {
//     item.innerHTML = format(values[index]);
//   });

//   if (t < 0) {
//     clearInterval(countdown);
//     deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
//   }
// }
// // countdown;
// let countdown = setInterval(getRemaindingTime, 1000);
// //set initial values
// getRemaindingTime();
