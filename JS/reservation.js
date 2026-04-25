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


let timeSelect = document.querySelectorAll("select")[0];
let guestCount = document.querySelectorAll("select")[1];
let occasion = document.querySelectorAll("select")[2];

let summaryValueTime = document.querySelector(".summary-value-time");
let summaryValueGuest = document.querySelector(".summary-value-guest");
let summaryValueOccasion = document.querySelector(".summary-value-occasion");

timeSelect.addEventListener("change" , () =>{

let timeValue = timeSelect.value;
summaryValueTime.textContent = timeValue;

})

guestCount.addEventListener("change" , () =>{

let guestValue = guestCount.value;
summaryValueGuest.textContent = guestValue;

})

occasion.addEventListener("change" , () =>{

let occasionValue = occasion.value;
summaryValueOccasion.textContent = occasionValue;

})
