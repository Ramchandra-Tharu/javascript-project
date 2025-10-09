const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === '' || password === '') {
    result.innerHTML = 'Please enter username and password';
    result.style.color = 'red';
  } else if (username !== 'admin' || password !== '1431') {
    result.innerHTML = 'Please enter the correct username or password';
    result.style.color = 'red';
  } else {
    form.innerHTML = '<h2 style="color:green;">Login Successful!</h2>';
  }
});
