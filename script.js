let phone = 0;
let phonecase = 0;

const Plus = document.getElementById('plus');
const Minus = document.getElementById('minus');

Plus.addEventListener('click', function () {
    handleCounter(true, 'count', 'total', 1200);

    // Update total calculation
    let calculation = phone + phonecase;
    document.getElementById('alltotal').innerText = 'All Total: $' + calculation;
});

Minus.addEventListener('click', function () {
    handleCounter(false, 'count', 'total', 1200);

    // Update total calculation
    let calculation = phone + phonecase;
    document.getElementById('alltotal').innerText = 'All Total: $' + calculation;
});

const Plus1 = document.getElementById('plus2');
const Minus1 = document.getElementById('minus2');

Plus1.addEventListener('click', function () {
    handleCounter(true, 'count2', 'total2', 105);

    // Update total calculation
    let calculation = phone + phonecase;
    document.getElementById('alltotal').innerText = 'All Total: $' + calculation;
});

Minus1.addEventListener('click', function () {
    handleCounter(false, 'count2', 'total2', 105);

    // Update total calculation
    let calculation = phone + phonecase;
    document.getElementById('alltotal').innerText = 'All Total: $' + calculation;
});

function handleCounter(isIncrease, countId, totalId, pricePerItem) {
    const counter = document.getElementById(countId);
    let currentCount = parseInt(counter.value);

    // Increment or decrement counter
    if (isIncrease) {
        currentCount++;
    } else if (!isIncrease && currentCount > 1) {
        currentCount--;
    }

    // Update the input field value
    counter.value = currentCount;

    // Calculate total price for the specific item
    const total = document.getElementById(totalId);
    let newTotal = currentCount * pricePerItem;
    total.innerText = '$' + newTotal;

    // Update global variables for total calculation
    if (countId === 'count') {
        phone = newTotal;
    } else if (countId === 'count2') {
        phonecase = newTotal;
    }
}
