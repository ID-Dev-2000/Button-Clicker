// items to increase clicks per second, items to increase clicks per click
// IDselect file
// event check for each purchase
// determine values for each item, access values somehow
const purchaseButton1 = document.getElementById('purchase1')


const buttonElement = document.getElementById('buttonButton')
const clickTracker = document.getElementById('clickTracker')
const clicksPerSecond = document.getElementById('clicksPerSecond')

const purchase1Count = document.getElementById('count1')

let newClickValue = 0
let countValue1 = 0
// update clicks and clicks per second, setinterval

// Purchase 1
purchaseButton1.addEventListener('click', function() {
    if (parseInt(clickTracker.innerHTML) >= 10) {
        countValue1++
        purchase1Count.innerHTML = countValue1
        newClickValue = parseInt(clickTracker.innerHTML) - 10
        clickTracker.innerHTML = newClickValue
    }
})

buttonElement.addEventListener('click', function() {
    newClickValue++
    clickTracker.innerHTML = newClickValue
})
