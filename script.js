// Purchase button element selectors
const purchaseButton1 = document.getElementById('purchase1')
const purchaseButton2 = document.getElementById('purchase2')
const purchaseButton3 = document.getElementById('purchase3')
const purchaseButton4 = document.getElementById('purchase4')

// Click value element selectors
const buttonElement = document.getElementById('buttonButton')
const clickTracker = document.getElementById('clickTracker')
const clickBoostTracker = document.getElementById('clicksBoost')

// Click boost element selectors
const purchase1Count = document.getElementById('count1')
const purchase2Count = document.getElementById('count2')
const purchase3Count = document.getElementById('count3')
const purchase4Count = document.getElementById('count4')

// Click value data handlers
let clickValue = 0
let clickBoost = 0

// Click Boost 1
let countValue1 = 0
purchaseButton1.addEventListener('click', function() {
    if (parseInt(clickTracker.innerHTML) >= 10) {
        countValue1++
        purchase1Count.innerHTML = countValue1
        clickValue = parseInt(clickTracker.innerHTML) - 10
        clickTracker.innerHTML = clickValue
        clickBoost += 1
        clickBoostTracker.innerHTML = clickBoost
    }
})

// Click Boost 2
let countValue2 = 0
purchaseButton2.addEventListener('click', function() {
    if (parseInt(clickTracker.innerHTML) >= 500) {
        countValue2++
        purchase2Count.innerHTML = countValue2
        clickValue = parseInt(clickTracker.innerHTML) - 500
        clickTracker.innerHTML = clickValue
        clickBoost += 10
        clickBoostTracker.innerHTML = clickBoost
    }
})

// Click Boost 3
let countValue3 = 0
purchaseButton3.addEventListener('click', function() {
    if (parseInt(clickTracker.innerHTML) >= 2000) {
        countValue3++
        purchase3Count.innerHTML = countValue3
        clickValue = parseInt(clickTracker.innerHTML) - 2000
        clickTracker.innerHTML = clickValue
        clickBoost += 100
        clickBoostTracker.innerHTML = clickBoost
    }
})

// Click Boost 4
let countValue4 = 0
purchaseButton4.addEventListener('click', function() {
    if (parseInt(clickTracker.innerHTML) >= 10000) {
        countValue4++
        purchase4Count.innerHTML = countValue4
        clickValue = parseInt(clickTracker.innerHTML) - 10000
        clickTracker.innerHTML = clickValue
        clickBoost += 1000
        clickBoostTracker.innerHTML = clickBoost
    }
})

// Click handler
buttonElement.addEventListener('click', function() {
    if (clickBoost == 0) {
        clickValue++
    } else {
        clickValue += clickBoost
    }
    clickTracker.innerHTML = clickValue
})

// Reset button
const resetButton = document.getElementById('resetButton')
const resetConfirmation = document.getElementById('resetConfirmation')
const yesSelect = document.getElementById('yesSelect')
const noSelect = document.getElementById('noSelect')

resetButton.addEventListener('click', function() {
    resetConfirmation.style.display = ''
    yesSelect.addEventListener('click', function() {
        // Would use for loop if dealing with more elements
        // Clear values
        clickValue = 0
        clickBoost = 0
        countValue1 = 0
        countValue2 = 0
        countValue3 = 0
        countValue4 = 0
        // Clear text display
        purchase1Count.innerHTML = '0'
        purchase2Count.innerHTML = '0'
        purchase3Count.innerHTML = '0'
        purchase4Count.innerHTML = '0'
        clickTracker.innerHTML = '0'
        clickBoostTracker.innerHTML = '0'
        resetConfirmation.style.display = 'none'
    })
    noSelect.addEventListener('click', function() {
        resetConfirmation.style.display = 'none'
    })
})
