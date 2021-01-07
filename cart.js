
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

    $cartItem.append($name, $image)
    $cartItemsContainer.append($cartItem)

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
