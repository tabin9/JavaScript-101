const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)              // pointer event
        console.log(e.target)       // show where the event was clicked on
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id
        }
    })
}) 