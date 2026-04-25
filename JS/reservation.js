let dateInput = document.querySelector(`input=[type="date"]`);
let summaryDate = document.querySelector('.summary-value')

dateInput.addEventListener("change" , () =>{
let dateValue = dateInput.ariaValueMax;
summaryDate.innerText = dateValue;
})


