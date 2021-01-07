const $navBar = document.querySelector('#menu-bar')

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
}

fetch('http://localhost:3000/purchased_items')
    .then(response => response.json())
    .then(purchased_items => purchased_items.forEach(purchasedItem => getItem(purchasedItem)))


    function getItem(purchasedItem) {
        fetch(`http://localhost:3000/items/${purchasedItem.item_id}`)
            .then(response => response.json())
            .then(console.log)
    }
