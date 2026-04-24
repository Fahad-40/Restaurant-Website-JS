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

function renderOrderSummary() {
    const DELIVERY_FEE = 15
    const SERVICE_CHARGE = 0.125  // 12.5%

    let subTotal = 0;

    cart.forEach(cartItem => {
        subTotal += Number(cartItem.price) * Number(cartItem.quantity);
    })

    let subTotalTextSpan = document.querySelector('.subTotal-text-span');
    let deliveryTextSpan = document.querySelector('.delivery-text-span');

    let serviceTextSpan = document.querySelector('.service-text-span');
    let grandTotalAmountSpan = document.querySelector('#grand-total-amount');

    let subTotal_service = subTotal * SERVICE_CHARGE;

    // for delivery fee
    let isDelivery = document.getElementById('fulfillment-method').value === 'delivery';
    let deliveryFee = isDelivery ? DELIVERY_FEE : 0;

    let grandTotal = subTotal + deliveryFee + subTotal_service;


    subTotalTextSpan.innerText = `£${subTotal.toFixed(2)}`;
    deliveryTextSpan.innerText = `£${deliveryFee.toFixed(2)}`;
    serviceTextSpan.innerText = `£${subTotal_service.toFixed(2)}`;
    grandTotalAmountSpan.innerText = `£${grandTotal.toFixed(2)}`;


    if (cart.length === 0) {
        subTotalTextSpan.innerText = `£00.00`;
        deliveryTextSpan.innerText = `£00.00`;
        serviceTextSpan.innerText = `£00.00`;
        grandTotalAmountSpan.innerText = `£00.00`;
    }


}
renderOrderSummary()

const checkoutBtn = document.querySelector('.checkout-btn');
function scrollToField(element) {
    element.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
    element.focus();
}
function IsValidInput() {

    let isvalid = true;
    let isDelivery = document.getElementById('fulfillment-method').value === 'delivery';

    if (isDelivery) {

        let addr1 = document.getElementById('addr1')
        let addr1Error = document.getElementById('addr1-error')
        if (addr1.value.trim() === "") {
            addr1Error.innerText = "Address Line 1 is required";
            addr1.style.borderBottom = "1px solid #d4ad65"
            isvalid = false;
             scrollToField(addr1); 
        }
        else {
            addr1Error.innerText = ""
            addr1.style.border = ""
          
        }

        let postcode = document.getElementById('postcode')
        let postcodeError = document.getElementById('postcode-error');

        if (postcode.value.trim() === "") {
            postcodeError.innerText = "Postcode is required"
            isvalid = false;
        } else {
            postcodeError.innerText = "";
            postcode.style.border = "";
        }

        let city = document.getElementById('city');
        let cityError = document.getElementById('city-error');
        if (city.value.trim() === "") {
            cityError.innerText = "City is required"
            isvalid = false;
        } else {
            cityError.innerText = ""
            city.style.border = ""
      
        }

    }

    if (isvalid) {
           checkoutBtn.disabled = false;
            checkoutBtn.style.opacity = "1";
    }
    return isvalid;
}
// IsValidInput()
checkoutBtn.addEventListener('click', () => {

    if (!IsValidInput()) {
        return;
    }

    localStorage.setItem('orderTime', Date.now().toString());

    // Dynamic redirect based on selection
    const method = document.getElementById('fulfillment-method').value;
    if (method === 'delivery') {
        window.location.href = 'rider_delivery_success.html';
    } else {
        window.location.href = 'self_delivery_success.html';
    }
});






