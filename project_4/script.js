const { use } = require("react");

const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.defaultPrevented();
    const username = document.querySelector('#username').values;
    const password = document.querySelector('#password').values;
    const button = document.querySelector('#button');

    button.addEventListener('click', () => {

         if(username === '' && password === ''){
        username.innerHtml = `Please enter username and password ${username}`;

    }
   else if(username != 'admin' && password !='1431') {
    username.innerHtml = 'please enter the correct username or password'
    
    
   }

    })

}

)
