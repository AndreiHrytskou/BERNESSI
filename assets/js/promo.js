/**
 * Constants
 */
const MONTH_NAMES = [
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
  "December"
];
const WEEKDAY_NAMES = ["Su", "Mo", "Tu", "We", "Thu", "Fri", "Sat"];
const DEFAULT_SELECTED_TEXT = "Select the initial and the end dates";
const DAY_TIME = 86400000;

/**
 * Variables
 */
var currentMonth = new Date().getMonth();
var currentYear = new Date().getFullYear();
var currentIndicator = null;
var selectedInitialDate = null;
var selectedEndDate = null;

/**
 * Component Elements
 */
let promoDate = document.querySelector(".promo__date"); 
let tableResult = document.querySelector(".result__table");
let select = document.querySelector(".select"); 
var datepickerBody = document.getElementById("datepicker-body");
var datepickerButton = document.getElementById("datepicker-button");
// var datepickerClearButton = document.getElementById("datepicker-clear-button");
var datepickerContainer = document.getElementById("datepicker-container");
// var datepickerSelectedText = document.getElementById(
//   "datepicker-selected-text"
// );
var datepickerNextButton = document.getElementById("datepicker-next-button");
var datepickerPreviousButton = document.getElementById(
  "datepicker-previous-button"
);
var datepickerIndicator = document.getElementById("datepicker-indicator");
var datepickerWeekTitle = document.getElementById("datepicker-week-title");

/**
 * Event Listeners
 */
datepickerButton.addEventListener("click", evt => toggleDatepicker());
datepickerNextButton.addEventListener("click", evt => changeIndicator(1));
datepickerPreviousButton.addEventListener("click", evt => changeIndicator(-1));
// datepickerClearButton.addEventListener("click", evt => clearSelection());
datepickerIndicator.addEventListener("click", evt => fillBody());

/**
 * Initial Conditions
 */
WEEKDAY_NAMES.forEach(day => {
  const dayTitle = document.createElement("li");
  dayTitle.innerText = day;
  datepickerWeekTitle.appendChild(dayTitle);
});
// datepickerSelectedText.innerText = DEFAULT_SELECTED_TEXT;

/**
 * Enable/disable the datepicker
 */
function toggleDatepicker() {
  if (datepickerContainer.style.display === "flex") {
    datepickerContainer.style.display = "none";
  } else {
    fillMonth();
    datepickerContainer.style.display = "flex";
  }
}

/**
 * Changes the current indicator (month, year or decade).
 * @param {number} d difference
 */
function changeIndicator(d) {
  switch (currentIndicator) {
    case "year":
      currentYear += d;
      fillYear();
      break;
    case "month":
      currentMonth += d;
      fillMonth();
      break;
    case "decade":
      currentYear += d * 10;
      fillDecade();
  }
}

/**
 * Calls the function to fill the datepicker body depending on indicator.
 * @param {'month' | 'year' | 'decade'} indicator
 */
function fillBody(indicator = currentIndicator) {
  currentIndicator = indicator;
  switch (indicator) {
    case "month":
      fillYear();
      break;
    case "year":
      fillDecade();
      break;
    case "decade":
      fillYear(new Date().getFullYear());
      break;
    default:
      fillMonth(new Date());
  }
}

/**
 * Select a day, it can be inital or ender.
 * @param {Date} day
 */
function selectDay(day) {
  if (!selectedInitialDate && !selectedEndDate) {
    selectedInitialDate = day;
	 console.log(selectedInitialDate);
    selectedEndDate = day;
   //  datepickerClearButton.style.display = "block";
  } else if (
    day.getTime() === selectedInitialDate.getTime() &&
    day.getTime() === selectedEndDate.getTime()
  ) {
    return clearSelection(true);
  } else if (day.getTime() === selectedInitialDate.getTime()) {
    selectedInitialDate = selectedEndDate;
  } else if (day.getTime() === selectedEndDate.getTime()) {
    selectedEndDate = selectedInitialDate;
  } else if (day > selectedInitialDate && day < selectedEndDate) {
    if (
      Math.abs(day - selectedInitialDate) >= Math.abs(day - selectedEndDate)
    ) {
      selectedEndDate = day;
    } else {
      selectedInitialDate = day;
    }
  } else if (day > selectedEndDate) {
    selectedEndDate = day;
  } else if (day < selectedInitialDate) {
    selectedInitialDate = day;
  }

  if (day.getMonth() !== currentMonth) {
    currentMonth = day.getMonth();
    currentYear = day.getFullYear();
  }

   promoDate.innerHTML = `${selectedInitialDate.toDateString()} - ${selectedEndDate.toDateString()}`;
 fillMonth();
}

/**
 * Clear selected dates.
 * @param {boolean} keepState keep the body month or return to start
 */
function clearSelection(keepState) {
//   datepickerClearButton.style.display = "none";
  selectedInitialDate = null;
  selectedEndDate = null;
//   datepickerSelectedText.innerHTML = DEFAULT_SELECTED_TEXT;
  fillMonth(keepState ? undefined : new Date());
}

/**
 * Fills the datepicker body with the weeks of a given day.
 * @param {Date} date
 */
function fillMonth(date = new Date(currentYear, currentMonth)) {
  currentYear = date.getFullYear();
  currentMonth = date.getMonth();
  currentIndicator = "month";

  datepickerBody.innerHTML = "";
  const monthDays = generateMonthDays(date);
  monthDays.forEach(week =>
    datepickerBody.appendChild(generateWeekElement(week))
  );

  datepickerIndicator.innerText =
    MONTH_NAMES[date.getMonth()];
  datepickerWeekTitle.style.display = "flex";
}

/**
 * Fills the datepicker body with the months of given year.
 * @param {number} fullYear
 */
function fillYear(fullYear = currentYear) {
  currentYear = fullYear;
  currentIndicator = "year";

  datepickerBody.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const element = document.createElement("ul");
    element.className = "datepicker-week-container";
    for (let j = 0; j < 3; j++) {
      element.appendChild(generateMonthElement(new Date(fullYear, i * 3 + j)));
    }
    datepickerBody.appendChild(element);
  }

  datepickerIndicator.innerText = fullYear;
  datepickerWeekTitle.style.display = "none";
}

/**
 * Fills the datepicker body with the decade of a given year.
 * @param {number} from
 */
function fillDecade(from = currentYear) {
  currentIndicator = "decade";

  from = Math.floor(from / 10) * 10;

  datepickerBody.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const element = document.createElement("ul");
    element.className = "datepicker-week-container";
    for (let j = 0; j < 2; j++) {
      element.appendChild(generateYearElement(from + i * 2 + j));
    }
    datepickerBody.appendChild(element);
  }

  datepickerIndicator.innerText = `${from} - ${from + 9}`;
  datepickerWeekTitle.style.display = "none";
}

/**
 * Returns a matrix with all dates of the month of given date.
 * It completes a matrix of 6 weeks with adjacent months days.
 * @param {Date} date
 */
function generateMonthDays(date = new Date()) {
  let monthDays = [];
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  let day = new Date(
    firstDay.getFullYear(),
    firstDay.getMonth(),
    1 - firstDay.getDay()
  );
  for (let weekcount = 0; weekcount < 6; weekcount++) {
    monthDays[weekcount] = [];
    for (let weekday = 0; weekday < 7; weekday++) {
      monthDays[weekcount][weekday] = new Date(day);
      day = new Date(day.setDate(day.getDate() + 1));
    }
    weekday = 0;
  }
  return monthDays;
}

/**
 * Returns a list item element to represent a day.
 * @param {Date} day
 */
function generateDayElement(day) {
  let element = document.createElement("li");
  element.innerText = day.getDate();
  element.className = "datepicker-list-item-container"; // Base day element class
  if (Date.now() - day >= 0 && Date.now() - day <= DAY_TIME) {
    element.className += " datepicker-list-item-today"; // Today class
  }
  if (day.getMonth() !== currentMonth) {
    element.className += " datepicker-list-item-outday"; // Out month days class
  }
  if (Date.now() == DAY_TIME - day) {
    element.className += " datepicker-list-item-unavaliable"; // Unavaliable or past days class
  } else {
    element.addEventListener("mousedown", evt => selectDay(day));
    if (selectedInitialDate && selectedEndDate) {
      if (
        day.getTime() === selectedInitialDate.getTime() ||
        day.getTime() === selectedEndDate.getTime()
      ) {
        element.className += " datepicker-list-item-selected"; // Selected days class
      } else if (day > selectedInitialDate && day < selectedEndDate) {
        element.className += " datepicker-list-item-between"; // Between selected days class
      }
    }
  }
   return element;
}

/**
 * Returns a list element to represent a week of a given array of days.
 * @param {Date[]} week
 */
function generateWeekElement(week) {
  let element = document.createElement("ul");
  element.className = "datepicker-week-container";
  week.forEach(day => element.appendChild(generateDayElement(day)));
  return element;
}

/**
 * Returns a list item element to represent a month.
 * @param {Date} date
 */
function generateMonthElement(date = new Date(currentYear)) {
  const element = document.createElement("li");
  element.innerText = MONTH_NAMES[date.getMonth()];
  element.className = "datepicker-list-item-container";
  if (
    new Date().getMonth() === date.getMonth() &&
    new Date().getFullYear() === date.getFullYear()
  ) {
    element.className += " datepicker-list-item-today";
  }
  if (
    new Date().getFullYear() > date.getFullYear() ||
    (new Date().getMonth() > date.getMonth() &&
      new Date().getFullYear() === date.getFullYear())
  ) {
   //  element.className += " datepicker-list-item-unavaliable";
  } else {
    element.addEventListener("click", evt =>
      fillMonth(new Date(currentYear, date.getMonth()))
    );
    if (selectedInitialDate && selectedEndDate) {
      if (
        (date.getFullYear() === selectedInitialDate.getFullYear() &&
          date.getMonth() === selectedInitialDate.getMonth()) ||
        (date.getFullYear() === selectedEndDate.getFullYear() &&
          date.getMonth() === selectedEndDate.getMonth())
      ) {
        element.className += " datepicker-list-item-selected";
      } else if (
        date.getFullYear() === selectedInitialDate.getFullYear() ||
        date.getFullYear() === selectedEndDate.getFullYear()
		  ) {
        if (
          selectedInitialDate.getFullYear() === selectedEndDate.getFullYear()
        ) {
			  if (
				  date.getMonth() > selectedInitialDate.getMonth() &&
				  date.getMonth() < selectedEndDate.getMonth()
				  ) {
					  element.className += " datepicker-list-item-between";
					}
				} else {
					if (
						(date.getFullYear() === selectedInitialDate.getFullYear() &&
						date.getMonth() > selectedInitialDate.getMonth()) ||
						(date.getFullYear() === selectedEndDate.getFullYear() &&
						date.getMonth() < selectedEndDate.getMonth())
						) {
            element.className += " datepicker-list-item-between";
          }
        }
      } else if (
        date.getFullYear() > selectedInitialDate.getFullYear() &&
        date.getFullYear() < selectedEndDate.getFullYear()
      ) {
        element.className += " datepicker-list-item-between";
      }
    }
  }
  return element;
}

/**
 * Returns a list item element to represent a month.
 * @param {number} fullYear
 */
function generateYearElement(fullYear) {
  const element = document.createElement("li");
  element.innerText = fullYear;
  element.className = "datepicker-list-item-container";
  if (new Date().getFullYear() === fullYear) {
    element.className += " datepicker-list-item-today";
  }
  if (new Date().getFullYear() > fullYear) {
   //  element.className += " datepicker-list-item-unavaliable";
  } else {
    element.addEventListener("click", evt => fillYear(fullYear));
    if (selectedInitialDate && selectedEndDate) {
      if (
        fullYear === selectedInitialDate.getFullYear() ||
        fullYear === selectedEndDate.getFullYear()
      ) {
        element.className += " datepicker-list-item-selected"; // Selected days class
      } else if (
        fullYear > selectedInitialDate.getFullYear() &&
        fullYear < selectedEndDate.getFullYear()
      ) {
        element.className += " datepicker-list-item-between"; // Between selected days class
      }
    }
  }
  return element;
}
select.addEventListener("click", ()=>{
	datepickerContainer.style.display = "none";
	tableResult.classList.add("show")
})