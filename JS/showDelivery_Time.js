

function formatTime(date) {

    let hour = date.getHours();
    let mins = date.getMinutes();

    let mins = mins < 10 ? "0" + mins : mins;

    return `${hours} : ${mins}`;

}

function showEstimatedArrival() {

    let now = new Date();
    let earliest = new Date(now.getTime() + 30 * 60 * 1000);
    let latest = new Date(now.getTime() + 60 * 60 * 10000);

let arrivalTimeDisplay = document.querySelector(".arrival-value");

arrivalTimeDisplay.innerHTML = `${formatTime(earliest)} - ${formatTime(latest)}`;

}
showEstimatedArrival()