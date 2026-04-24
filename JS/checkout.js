let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCheckoutItems() {
    const checkoutItemsContainer = document.querySelector(".cart-items");

    checkoutItemsContainer.innerHTML = "";

    cart.forEach(cartItem => {

        checkoutItemsContainer.innerHTML += `
    
            <div class="cart-item">
                        <div class="item-details">
                            <p>${cartItem.name}</p>
                            <span>Qty: ${cartItem.quantity}</span>
                        </div>
                        <span class="item-price">£${cartItem.price}</span>
                    </div>

    `

    })

}
renderCheckoutItems();

const DELIVERY_FEE = 15
const SERVICE_CHARGE = 0.125  // 12.5%

let subTotal = 0;
let subTotal_service = subTotal * SERVICE_CHARGE;


cart.forEach(cartItem => {
subTotal += cartItem.price * cartItem.quantity;
})

let subTotalTextSpan = document.querySelector('.subTotal-text-span');
let deliveryTextSpan = document.querySelector('.delivery-text-span');

let serviceTextSpan = document.querySelector('.service-text-span');
let grandTotalAmountSpan = document.querySelector('#grand-total-amount');

let grandTotal = subTotal + DELIVERY_FEE + subTotal_service;

subTotalTextSpan.innerText = `£${subTotal.toFixed(2)}`;
deliveryTextSpan.innerText = `£${DELIVERY_FEE.toFixed(2)}`;
serviceTextSpan.innerText =  `£${subTotal_service.toFixed(2)}`;
grandTotalAmountSpan.innerText = `£${grandTotal.toFixed(2)}`;







