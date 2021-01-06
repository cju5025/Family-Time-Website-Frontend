
const $navBar = document.querySelector('#menu-bar')

if (localStorage.getItem("token")){
    const $signOutLink = document.createElement('a')
    $signOutLink.innerText = 'Sign Out'
    $signOutLink.href = 'index.html'
    $signOutLink.classList.add('nav-bar-link')
    $navBar.append($signOutLink)

    const $myAccountLink = document.createElement('a')
    $myAccountLink.innerText = 'My Account'
    $myAccountLink.href = 'my-account.html'
    $myAccountLink.classList.add('nav-bar-link')
    $navBar.append($myAccountLink)

    $signOutLink.addEventListener('click', signOut)

    function signOut (event) {
        localStorage.removeItem("token")
    }
}




