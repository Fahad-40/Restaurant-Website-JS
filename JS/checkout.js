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

cart.forEach(cartItem => {
subTotal += cartItem.price * cartItem.quantity;
})



