const searchParams = new URLSearchParams(location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/items/${id}`)
    .then(response => response.json())
    .then(item => showItem(item))

    const $pluginSection = document.querySelector('#plugin-section')

    function showItem (item) {
        const $name = document.createElement('h1')
        $name.id = "name"
        $name.textContent = item.name

        const $description = document.createElement('p')
        $description.id = "description"
        $description.textContent = item.description

        const $image = document.createElement('img')
        $image.id = "plugin-image"
        $image.alt = item.name
        $image.title = item.name 
        $image.src = item.image_source

        const $addToCartButton = document.createElement('button')
        $addToCartButton.type = "button"
        $addToCartButton.id = "add-to-cart-button"
        $addToCartButton.textContent = "Add To Cart"    

        $addToCartButton.addEventListener('click', addToCart)

        function addToCart () {

            // const user = fetch('http://localhost:3000/users')


            const newCartItem = {
                user_id: null,
                item_id: item.id
            }

            fetch('http://localhost:3000/cart_items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCartItem)
            })
                .then(response => response.json())
                .then(console.log)
        }

        $pluginSection.append($name, $description, $image, $addToCartButton)
    }


