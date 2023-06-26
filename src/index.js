import { refresh } from 'less';
import './less/index.less'

// Your code goes here!

//MouseOver

document.body.addEventListener('pointerover', evt => {
    evt.target.style.color = 'blue';
})

//Keydown

window.addEventListener('keydown', evt => {
    if (evt.key == 8) {
        document.body.innerHTML = '<h1>You Missed The Bus Better Luck Next Time</h1>'
    }
})

//Keyup

window.addEventListener('keyup', evt => {
    if (evt.key == 6) {
        document.body.style.background = 'red'
    }
})

//MouseMove

document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
    //console.log(`mouse is at ${clientX}, ${clientY}`)
})

//Load

window.onload = function(evt) {
    console.log(`event ${evt.type} activated! Let's Go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'Fun Bus Heading Out!'
}

//MouseEnter and MouseLeave

const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', event => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}

//Click

document.body.addEventListener('click', evt => {
    evt.target.style.backgroundColor = 'pink';
    evt.preventDefault();
})

//Copy

window.addEventListener('copy', () => {
    navigator.clipboard.readText()
        .then(text => {
            console.log(text)
        })
})

//DblClick

document.body.addEventListener('dblclick', evt => {
    evt.target.innerHTML = ''
})