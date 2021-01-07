
fetch('http://localhost:3000/cart_items')
.then(response => response.json())
.then(items => items.forEach(item => getItem(item)))

function getItem (item) {
    
    fetch(`http://localhost:3000/items/${item.item_id}`)
        .then(response => response.json())
        .then(item => showItem (item))
        
}

const $cartItemsContainer = document.querySelector('#cart-items-container')

function showItem (item) {
    const $cartItem = document.createElement('div')
    $cartItem.id = "cart-item"

    const $name = document.createElement('h1')
    $name.id = "name"
    $name.textContent = item.name

    const $image = document.createElement('img')
    $image.id = "plugin-image"
    $image.alt = item.name
    $image.title = item.name 
    $image.src = item.image_source

    const $price = document.createElement('p')
    $price.id = "price"
    $price.textContent = `$ ${item.price}`

    const $deleteButton = document.createElement('button')
    $deleteButton.type = "button"
    $deleteButton.id = "delete-button"
    $deleteButton.textContent = "Remove Item"

    $cartItem.append($name, $image, $price, $deleteButton)
    $cartItemsContainer.append($cartItem)

    $deleteButton.addEventListener ('click', removeItemFromCart)

    function removeItemFromCart () {

        // fetch(`http://localhost:3000/cart_items/${cart_item.id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        this.closest('div').remove();
    }
}


const $emptyCartButton = document.querySelector('#empty-cart-button')

$emptyCartButton.addEventListener('click', emptyCart)

function emptyCart () {
    fetch ('http://localhost:3000/cart_items')
        .then(response => response.json())
        .then(items => items.forEach(item => deleteItem(item)))
        .then(location.replace('cart.html'))
}

function deleteItem (item) {
    fetch(`http://localhost:3000/cart_items/${item.id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })
}


const $navBar = document.querySelector('#menu-bar')
const $signInLink = document.querySelector('#sign-in-link')
const $signUpLink = document.querySelector('#sign-up-link')

if (localStorage.getItem("token")){
    const $signOutLink = document.createElement('a')
    $signOutLink.innerText = 'Sign Out'
    $signOutLink.href = 'index.html'
    $signOutLink.classList.add('nav-bar-link')
    $navBar.append($signOutLink)

    $signOutLink.addEventListener('click', signOut)

    function signOut (event) {
        localStorage.removeItem("token")
    }

    const $myAccountLink = document.createElement('a')
    $myAccountLink.innerText = 'My Account'
    $myAccountLink.href = 'my-account.html'
    $myAccountLink.classList.add('nav-bar-link')
    $navBar.append($myAccountLink)

    $navBar.removeChild($signInLink)
    $navBar.removeChild($signUpLink)
}



