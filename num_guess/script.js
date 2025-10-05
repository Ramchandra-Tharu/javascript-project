// Generate random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get elements
const input = document.getElementById("input-val");
const button = document.getElementById("button");
const result = document.getElementById("result");

// Add click event
button.addEventListener("click", function() {
    const guess = Number(input.value);
    attempts++;

    if (!guess) {
        result.textContent = "❌ Please enter a number!";
        return;
    }

    if (guess === secretNumber) {
        result.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
        button.disabled = true; // disable after correct guess
    } else if (guess > secretNumber) {
        result.textContent = "📉 Too high! Try again.";
    } else {
        result.textContent = "📈 Too low! Try again.";
    }

    input.value = ""; // clear input
    input.focus();    // focus input for next guess
});
