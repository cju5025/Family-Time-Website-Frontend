const $addToCartButton = document.querySelector('#add-to-cart-button')

$addToCartButton.addEventListener('click', addToCart)

function addToCart () {

    console.log()

    fetch('http://localhost:3000/cart_items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCartItem)
    })
}