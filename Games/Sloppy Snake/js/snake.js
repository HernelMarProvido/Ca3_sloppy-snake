// SET my snake speed
const Snake_Speed = 5

// let segments Defualt to 0

let newSegment = 0

// drawing snake body using grid system
// snake will be drawn at the center of the page
const snakeBody = [{x: 11, y: 11}]

// Create a function that will update our game
function update() {
    // update for adding snakebody
    addSegments()

    const InputDirection =  getInputDirection()
    
    for(let i = snakeBody.length - 2; i >=0; i--){
        // duplicating the snake body so that it look like it moving
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    // updating the head of the snake
    snakeBody[0].x += InputDirection.x
    snakeBody[0].y += InputDirection.y
}

// Create a function that will re-draw our updated game
function draw(gameWindow) {

    // creating a snake body on my cavas
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameWindow.appendChild(snakeElement)
    })
        
    
}

// function when snake eat the food it grows
function expandSnake( amount ){
    newSegment += amount 
}

// function for when snake eat food. food move to a new location
// ignore snake head is equals to empty pram incase we dont pass anything
function onSnake(position, {ignoreSnakeHead = false } = {}){
    // loop on each segments to see if food is on snake
    return snakeBody.some((segment, index) =>{
        // if we are on the snake head we return false 
        if(ignoreSnakeHead && index === 0) return false

        return equalPosition(segment, position)
    })
}

// snake head position on the grid
function getSnakeHead(){
    return snakeBody[0]
}

// game obstacles intersections
function obstacles(){
    // if snake hit snake body player loses
    return onSnake(snakeBody[0], {ignoreSnakeHead: true})
}

//this move food when snake eats it 
function equalPosition(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

// this function will allow the snake to grow by adding some segments 
function addSegments(){
    for(let i = 0; i < newSegment; i++){
        // add snake body 
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }
    newSegment = 0
}