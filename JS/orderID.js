let reservationOrderId = document.querySelector(".details-value")

function OrderID() {
    
    let letters = ['A','B','C','D','E','F','G','H','J','K','L','M',
                   'N','P','Q','R','S','T','V','W','X','Y','Z'];

let letter1 = letters[Math.floor(Math.random() * letters.length)];
let letter2 = letters[Math.floor(Math.random() * letters.length)];

let number = Math.floor(Math.random() * 900) + 100;

let id = `BG-${number}-VIP`;

reservationOrderId.textContent = id;

}
