const searchParams = new URLSearchParams(location.search)
const id = searchParams.get('id')

console.log(`id = ${id}`)

fetch(`http://localhost:3000/items/${id}`)
    .then(response => response.json())
    .then(console.log)









const $addToCartButton = document.querySelector('#add-to-cart-button')

// $addToCartButton.addEventListener('click', addToCart)

// function addToCart () {

    

//     // const newCartItem = {
//     //     user_id: 
//     // }

//     fetch('http://localhost:3000/cart_items', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newCartItem)
//     })
// }