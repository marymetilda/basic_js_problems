const date = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentHour = date.getHours();
const currentMinute = date.getMinutes();
const currentSecond = date.getSeconds();

const prepand = currentHour >= 12 && currentHour !== 24 ? "PM" : "AM";

const convertedHours = currentHour <= 12 ? currentHour : currentHour - 12;

const currentDateAndTime = {
  "Today is": days[date.getDay()],
  "Current time is":
    convertedHours +
    " " +
    prepand +
    " : " +
    currentMinute +
    " : " +
    currentSecond,
};

console.log(currentDateAndTime);
