


$navBarLinks = document.querySelector('.nav-bar-links')

$navBarLinks.addEventListener('mouseover', (event) => 
{
    $navBarLinks.classList.add('underline')
})

$navBarLinks.addEventListener('mouseout', (event) => 
{
    $navBarLinks.classList.remove('underline')
})