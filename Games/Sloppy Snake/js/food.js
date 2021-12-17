// position of food in the cavas
let food = getRandomFoodPosition0()

// this will allow snake to grow 
let Expansion_rate = 3

// Create a function that will update our game
function update() {
    if(onSnake(food)){
        expandSnake(Expansion_rate)
        food = getRandomFoodPosition0()
    }
}

// Create a function that will re-draw our updated game
function draw(gameWindow) {

    // creating a food on my cavas
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameWindow.appendChild(foodElement)
}

//function for random food spawns 
function getRandomFoodPosition0(){
    let newFoodPosition
    // This lets food spawn anywhere on the grid but not ton the snake
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}