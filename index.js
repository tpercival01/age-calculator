const form = document.getElementById("input-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // grab the values from the input

  let days = e.target[0].value;
  let months = e.target[1].value;
  let years = e.target[2].value;

  // get the current date
  let current_date = new Date();
  console.log(current_date);

  // check if day is less than 0 (if input is more than current day)
  // set it to the number of days in the previous month
  let final_day = current_date.getDate() - days;
  if (final_day < 0) {
    let daysInmonth = new Date(
      current_date.getFullYear(),
      current_date.getMonth(),
      0
    ).getDate();
    final_day = daysInmonth + final_day;
  }

  let final_year = current_date.getFullYear() - years;

  // check if month is less than 0
  // set it to a year + the negative number of months
  let final_month = current_date.getMonth() - months;
  if (final_month < 0) {
    final_month = 12 + final_month;
    final_year -= 1;
  }

  console.log(final_month);

  setDay(final_day);
  setMonth(final_month);
  setYear(final_year);
});

// Animate all numbers using a promise to slow down the animation

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const setDay = async (day) => {
  if (day === 0) {
    document.getElementById("result-day").innerHTML = 0;
  } else {
  }
  for (let i = 1; i <= day; i++) {
    await sleep(100);
    document.getElementById("result-day").innerHTML = i;
  }
};

const setMonth = async (month) => {
  if (month === 0) {
    document.getElementById("result-month").innerHTML = 0;
  } else {
    for (let i = 1; i <= month; i++) {
      await sleep(500);
      document.getElementById("result-month").innerHTML = i;
    }
  }
};

const setYear = async (year) => {
  if (year === 0) {
    document.getElementById("result-year").innerHTML = 0;
  } else {
    for (let i = 1; i <= year; i++) {
      await sleep(200);
      document.getElementById("result-year").innerHTML = i;
    }
  }
};
