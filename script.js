let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    totalPrice += price;
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}
