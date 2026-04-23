  // save cart 
    function saveCart() {
        localStorage.setItem("cart" , JSON.stringify(cart));
    }

       // Add to cart function

    function AddToCart(item) {
        let cart = [];

        let checkExistingItem = cart.find(cartItem => cartItem.name === item.name);

        if (checkExistingItem) {
            item.quantity += 1;
        }
        else {
            cart.push(
                {
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    quantity: item.quantity
                }
            )
        }
        saveCart();

    }


// Getting Items from Cart

function updateCartUI() {

    let cartItemsContainer = document.querySelector("#cart-items-container");
    
let cartLS = JSON.parse(localStorage.getItem("cart"));

cartLS.forEach(cartItem => {

    cartItemsContainer.innerHTML += `
    
                 <div class="cart-item">
                    <div class="cart-item-img">
                        <img alt="Wagyu Beef Tartare" src="${cartItem.img}" />
                    </div>
                    <div class="cart-item-details">
                        <h3 class="cart-item-name">${cartItem.name}</h3>
                        <p class="cart-item-price">${cartItem.price}</p>
                        <div class="cart-item-controls">
                            <div class="qty-selector">
                                <button class="qty-btn">−</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn">+</button>
                            </div>
                            <button class="remove-btn">Remove</button>
                        </div>
                    </div>
                </div>

    `


})

}

