// Write your code here...
const baseUrl = 'http://localhost:3000/menu'
const menuItemsDiv = document.getElementById('menu-items')
const cartForm = document.getElementById('cart-form')

let displayDishImage = document.getElementById('dish-image')
let displayDishName = document.getElementById('dish-name')
let displayDishDescription = document.getElementById('dish-description')
let displayDishPrice = document.getElementById('dish-price')
let numberInCart = document.getElementById('number-in-cart')
let currentAmount = 0

function fetchMenuItems() {
    fetch(baseUrl)
    .then(r => r.json())
    .then(menuItems => renderMenuItems(menuItems))
}
fetchMenuItems()

function renderMenuItems(menuItems){
    menuItems.forEach(menuItem => renderIndividualItem(menuItem))
    loadFirstMenuItem(menuItems)
}

function renderIndividualItem(menuItem) {
    const span = document.createElement('span')
    span.innerText = menuItem.name
    menuItemsDiv.appendChild(span)

    span.addEventListener('click', () => {
        loadMenuItem(menuItem)
    })
}

function loadFirstMenuItem(menuItem) {
    loadMenuItem(menuItem[0])
}

function loadMenuItem(menuItem) {
    displayDishImage.src = menuItem.image
    displayDishName.innerText = menuItem.name
    displayDishDescription.innerText = menuItem.description
    displayDishPrice.innerText = menuItem.price
}

cartForm.addEventListener('submit', (e) => {
    e.preventDefault()

    currentAmount += parseInt(e.target['number-in-cart'].value)
    numberInCart.innerText = currentAmount
})