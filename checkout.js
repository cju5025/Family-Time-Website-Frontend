fetch ('http://localhost:3000/cart_items')
    .then(response => response.json())
    .then(cart_items => cart_items.forEach(cart_item => findItem(cart_item)))

    function findItem (cart_item) {
        fetch (`http://localhost:3000/items/${cart_item.item_id}`)
            .then(response => response.json())
            .then(item => displayItem(item))
    }

    const $listContainter = document.querySelector('#list-container')
    const $itemNameList = document.querySelector('#item-name-list')
    const $itemPriceList = document.querySelector('#item-price-list')

    function displayItem (item) {
        const $itemName = document.createElement('li')
        $itemName.textContent = item.name 

        const $itemPrice = document.createElement('li')
        $itemPrice.textContent = item.price

        $itemNameList.append($itemName)
        $itemPriceList.append($itemPrice)
    }

    const $checkoutButton = document.querySelector('#checkout-button')

    $checkoutButton.addEventListener('click', purchaseItems)

    function purchaseItems () {
        fetch('http://localhost:3000/cart_items')
            .then(response => response.json())
            .then(cart_items => getItem(cart_items))
    }

    function getItem (cart_items) {
        cart_items.forEach(item => {
            fetch(`http://localhost:3000/items/${item.item_id}`)
                .then(response => response.json())
                .then(item => purchaseItem(item))
        })
    }


    function purchaseItem (item) {

        const newPurchaseItem = {
            user_id: null,
            item_id: item.id
        }
        
        fetch('http://localhost:3000/purchased_items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPurchaseItem)
        })
            .then(location.replace('my-account.html'))
    }