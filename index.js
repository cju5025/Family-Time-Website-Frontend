


$navBarLinks = document.querySelector('.nav-bar-links')

$navBarLinks.addEventListener('mouseover', (event) => 
{
    $navBarLinks.classList.add('mouseover')
})

$navBarLinks.addEventListener('mouseout', (event) => 
{
    $navBarLinks.classList.remove('mouseover')
})
