// let snake stay centered when not moving
let inputDirection = {x: 0, y: 0}
let lastInputDirection = {x: 0, y: 0}

// moving snake using arrow keys
window.addEventListener('keydown', e =>{
    switch(e.key){      
        case 'ArrowUp':
            // adding if here allow me to not let player move back 
            if(lastInputDirection.y !== 0 ) break
            inputDirection = {x: 0, y: -1}
            break
        case 'ArrowDown':
            if(lastInputDirection.y !== 0 ) break
            inputDirection = {x: 0, y: 1}
            break
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0 ) break
            inputDirection = {x: -1, y: 0}
            break
        case 'ArrowRight':
            if(lastInputDirection.x !== 0 ) break
            inputDirection = {x: 1, y: 0}
            break
    }
})

// exporting Inputs
function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}
