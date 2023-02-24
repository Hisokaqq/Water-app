export const timeDet = () => {
    const getTimeOfDay = () => {
        const now = new Date()
        const hour = now.getHours()

        if (hour >= 5 && hour < 12) {
            return "Good Morning"
        } else if (hour >= 12 && hour < 18) {
            return "Good Afternoon"
        } else {
            return "Good Evening"
        }
    }
    return getTimeOfDay()
}

function checkNewDay() {
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    // check if it's a new day
    if (currentDay != checkNewDay.lastDay || currentMonth != checkNewDay.lastMonth || currentYear != checkNewDay.lastYear) {
        // call your function here


        // update last checked date
        checkNewDay.lastDay = currentDay;
        checkNewDay.lastMonth = currentMonth;
        checkNewDay.lastYear = currentYear;
    }
}

// set initial values for last checked date
checkNewDay.lastDay = new Date().getDate();
checkNewDay.lastMonth = new Date().getMonth();
checkNewDay.lastYear = new Date().getFullYear();

// call the function every 24 hours (in milliseconds)
setInterval(checkNewDay, 24 * 60 * 60 * 1000);


export function secondsToMinutes(seconds) {
    return Math.floor(seconds / 60)
}