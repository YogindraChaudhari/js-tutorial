const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body')
// console.log(body)
buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);

        // using if statement:

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'turquoise'){
            body.style.backgroundColor = e.target.id;
        }
    });
    
});
