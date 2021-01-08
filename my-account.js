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

    const $pluginSection = document.querySelector('#plugin-section')

    function showItem(item) {

        const $name = document.createElement('h1')
        $name.id = "name"
        $name.textContent = item.name

        const $image = document.createElement('img')
        $image.id = "plugin-image"
        $image.alt = item.name
        $image.title = item.name 
        $image.src = item.image_source

        const $downloadButton = document.createElement('a')
        $downloadButton.id = "download-link"
        $downloadButton.href = 'https://drive.google.com/u/0/uc?id=1WIiKPzflfFm1n2YL57Kfp8jWMikGz1JP&export=download'
        $downloadButton.innerHTML = `<button id="download-button">Download</button>`

        $pluginSection.append($name, $image, $downloadButton)
    }