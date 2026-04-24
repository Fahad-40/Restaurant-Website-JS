let cart = JSON.parse(localStorage.getItem("cart")) || []

// save cart 
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add to cart function

function AddToCart(item) {

    let checkExistingItem = cart.find(cartItem => cartItem.name === item.name);

    if (checkExistingItem) {
        checkExistingItem.quantity += 1;
    }
    else {
        cart.push(
            {
                name: item.name,
                price: item.price,
                img: item.img,
                quantity: 1
            }
        )
    }
    saveCart();
    countUpdate();
    updateCartUI();
}


// Getting Items from Cart

function updateCartUI() {

    let cartItemsContainer = document.querySelector("#cart-items-container");
    cartItemsContainer.innerHTML = ``;
    let cartLS = JSON.parse(localStorage.getItem("cart"));

    cartLS.forEach(cartItem => {

        cartItemsContainer.innerHTML += `
    
                 <div class="cart-item">
                    <div class="cart-item-img">
                        <img alt="Wagyu Beef Tartare" src="${cartItem.img}" />
                    </div>
                    <div class="cart-item-details">
                        <h3 class="cart-item-name">${cartItem.name}</h3>
                        <p class="cart-item-price">£${cartItem.price}</p>
                        <div class="cart-item-controls">
                            <div class="qty-selector">
                                <button class="qty-btn qty-minus" data-name="${cartItem.name}">−</button>
                                <span class="qty-val">${cartItem.quantity}</span>
                            <button class="qty-btn qty-plus" data-name="${cartItem.name}">+</button>
                            </div>
                            <button class="remove-btn" data-name="${cartItem.name}">Remove</button>
                        </div>
                    </div>
                </div>

    `
    })
    increaseQty();
    decreaseQty();
    removeItem()
    countUpdate();
    EmptyCart()
}


function countUpdate() {
   
    document.querySelector('.basket-count').innerText = cart.length
}
countUpdate();


function EmptyCart() {
  let cartItemsContainer = document.querySelector("#cart-items-container");
  let reviewBtn = document.querySelector(".review-btn");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<h2 class="empty-cart">Your cart is empty</h2>`;
   reviewBtn.style.pointerEvents = "none"; // Click block karne ke liye
reviewBtn.style.opacity = "0.5";  
  }
  else{
       reviewBtn.style.pointerEvents = "display"; // Click block karne ke liye
reviewBtn.style.opacity = "1";  
  }
}
updateCartUI();

function increaseQty() {
    document.querySelectorAll(".qty-plus").forEach(button => {
        button.addEventListener("click", () => {

            let itemName = button.dataset.name;

            let checkExistingItem = cart.find(cartItem => cartItem.name === itemName);
            if (checkExistingItem) {
                checkExistingItem.quantity += 1;
            }
            saveCart();
            updateCartUI();
        })
    })
}

function decreaseQty() {

    document.querySelectorAll(".qty-minus").forEach(button => {
        button.addEventListener("click", () => {
            let itemName = button.dataset.name;
            let checkExistingItem = cart.find(cartItem => cartItem.name === itemName);
            if (checkExistingItem.quantity > 1) {
                checkExistingItem.quantity -= 1;
                saveCart();
                updateCartUI();
            }

            else {
                cart = cart.filter(cartItem => cartItem.name !== itemName);
                saveCart();
                updateCartUI();
            }
        })
    })

}

// Remove Functionality

function removeItem() {
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", () => {
            let itemName = button.dataset.name;

            cart = cart.filter(cartItem => cartItem.name !== itemName);
            saveCart();
            updateCartUI();
        })


    })

}