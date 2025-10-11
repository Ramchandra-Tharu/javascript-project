// Get elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Loop through each button
let value = 0;
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    // Handle Clear (C)
    if (button.classList.contains('clear')) {
      display.value = '';
    }

    // Handle Delete (⌫)
    else if (button.classList.contains('delete')) {
      display.value = display.value.slice(0, -1);
    }

    // Handle Equal (=)
    else if (button.classList.contains('equal')) {
      try {
        // Evaluate the expression
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }

    // Handle numbers and operators
    else {
      display.value += value;
    }
  });
});
