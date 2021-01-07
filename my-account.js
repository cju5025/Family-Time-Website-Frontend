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
            .then(item => showItem(item))
    }

    function showItem(item) {
        const $pluginSection = document.querySelector('#plugin-section')

        const $name = document.createElement('h1')
        $name.id = "name"
        $name.textContent = item.name

        const $image = document.createElement('img')
        $image.id = "plugin-image"
        $image.alt = item.name
        $image.title = item.name 
        $image.src = item.image_source

        $pluginSection.append($name, $image)
    }