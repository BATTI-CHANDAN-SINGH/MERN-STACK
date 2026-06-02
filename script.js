// Target HTML layout elements using DOM Selectors
const counterDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Maintain application tracking state
let count = 0;

// Function to safely refresh the displayed value
function updateDisplay() {
    counterDisplay.textContent = count;
}

// Attach event listeners to respond to user clicks
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});
