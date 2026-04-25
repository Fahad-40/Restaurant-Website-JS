const RESERVATION_ID_KEY = "reservationID";

function generateReservationID() {
    const number = Math.floor(Math.random() * 900) + 100;
    return `BG-${number}-VIP`;
}

function saveNewReservationID() {
    const newID = generateReservationID();
    sessionStorage.setItem(RESERVATION_ID_KEY, newID);
    return newID;
}

function getSavedReservationID() {
    return sessionStorage.getItem(RESERVATION_ID_KEY);
}

function showReservationID() {
    const reservationOrderId = document.querySelector(".details-value");

    if (!reservationOrderId) {
        return;
    }

    const savedID = getSavedReservationID();

    if (savedID) {
        reservationOrderId.textContent = savedID;
    }
}

window.reservationIDManager = {
    saveNewReservationID,
    getSavedReservationID
};

showReservationID();
