let reservationOrderId = document.querySelector(".details-value");

let savedID = localStorage.getItem("reservationID");

if (savedID && reservationOrderId) {
    reservationOrderId.textContent = savedID;
}