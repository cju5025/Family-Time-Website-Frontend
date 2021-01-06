
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

const $pluginImagesContainer = document.querySelector('#plugin-images-container')

fetch ('http://localhost:3000/items')
    .then(response => response.json())
    .then(items => items.forEach(item => addItem(item)))

function addItem (item) {
    const $pluginImage = document.createElement('a')
    $pluginImage.href = `../plugin-show-pages/${item.show_name}.html`
    $pluginImage.innerHTML = `<img class="plugin-image"  alt="${item.name}" title="${item.name}" src="${item.image_source}">`

    $pluginImagesContainer.append($pluginImage)
}


