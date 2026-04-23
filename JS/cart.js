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
    
    
    
    `


})

}

