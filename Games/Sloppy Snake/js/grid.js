

const Grid_Size = 21

// return a random food position on the grid
function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * Grid_Size) + 1,
        y: Math.floor(Math.random() * Grid_Size) + 1
    }

}
// function to check snake head posi0tion is outside of grid
function outsideGrid(position) {
    return (
        position.x < 1 || position.x > Grid_Size ||
        position.y < 1 || position.y > Grid_Size
    )
}