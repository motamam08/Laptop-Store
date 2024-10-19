
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}




let cartItems = []; // Initialize cart as an empty array

// Function to add item to cart
function addToCart(name, price) {
    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if already in cart
    } else {
        cartItems.push({ name, price, quantity: 1 });
    }
    
    // Notify user
    alert(`${name} has been added to your cart!`);
    
    // Update cart item count
    updateCartCount();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartBody = document.getElementById("cart-body");
    cartBody.innerHTML = "";
    let totalPrice = 0;

    cartItems.forEach(item => {
        const total = item.price * item.quantity;
        totalPrice += total;

        const row = `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" class="form-control" style="width: 80px;" onchange="updateQuantity('${item.name}', this.value)">
                </td>
                <td>$${total}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.name}')">Remove</button>
                </td>
            </tr>
        `;
        cartBody.innerHTML += row;
    });

    document.getElementById("total-price").innerText = `Total: $${totalPrice}`;
}

// Function to update quantity
function updateQuantity(name, quantity) {
    const item = cartItems.find(item => item.name === name);
    if (item) {
        item.quantity = parseInt(quantity);
        updateCartDisplay(); // Update the display without localStorage
    }
}

// Function to remove item from cart
function removeFromCart(name) {
    cartItems = cartItems.filter(item => item.name !== name);
    updateCartDisplay(); // Update the display without localStorage
    updateCartCount(); // Update the cart count
}


// Function to update the cart item count
function updateCartCount() {
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cart-count").innerText = cartCount; // Update the cart count
}

// Initial display of cart items on cart page
if (document.getElementById("cart-body")) {
    updateCartDisplay();
    updateCartCount(); // Initialize the cart count on page load
}

