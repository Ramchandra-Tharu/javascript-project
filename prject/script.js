const body = document.querySelector("body")

const buttons = document.querySelectorAll('.button')
buttons.forEach(function(button)
{
button.addEventListener('click', (e)=>{
    if(e.target.id ==='gray'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id ==='red'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'Green'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'yellow'){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id ==='blue')
    {
        body.style.backgroundColor =e.target.id
    }

   
})
}

)