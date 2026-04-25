let dateInput = document.querySelector(`input[type="date"]`);
let summaryDate = document.querySelector('.summary-value')

function currentDate() {
    let now = new Date()

    let today = now.toISOString().split("T")[0];
    dateInput.value = today;

    let formatedDate2 = now.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })

    summaryDate.innerText = formatedDate2;

}
currentDate()

dateInput.addEventListener("change", () => {
    let dateValue = new Date(dateInput.value);

    let formatedDate = dateValue.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })

    summaryDate.innerText = formatedDate;
})



