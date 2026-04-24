

function formatTime(date) {

    let hour = date.getHours();
    let mins = date.getMinutes();

 mins = mins < 10 ? "0" + mins : mins;

    return `${hour} : ${mins}`;

}

function showEstimatedArrival() {

    let now = new Date();
    let earliest = new Date(now.getTime() + 30 * 60 * 1000);
    let latest = new Date(now.getTime() + 60 * 60 * 1000);
let arrivalTimeDisplay = document.querySelector(".detail-value") 


arrivalTimeDisplay.innerHTML = `${formatTime(earliest)} — ${formatTime(latest)}`;

}
showEstimatedArrival()