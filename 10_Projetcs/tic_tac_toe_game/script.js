let currentPlayer = 'X'
let boxes = document.getElementsByClassName("box")
let result = document.getElementById("result")
let boxesArray = Array.from(boxes)
let restart = document.getElementById("restart")

// console.log(boxesArray[5]);

boxesArray.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText === "") {
            box.innerText = currentPlayer
            if (checkWinner()) {
                // checking for the winner after each turn
                result.style.color = 'lightgreen'
                result.innerText = `${currentPlayer} wins!`
                // alert(`${currentPlayer} wins!`)
                // resetGame()
            } else {
                // switching the current player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                console.log(currentPlayer)
                checkDraw() // lets check if its a draw
            }
        } else {
            alert("Please choose another box!")
        }
    })
})

function checkWinner() {
    let winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // Diagonal
    ];

    for (let combo of winningCombos) {
        let a = combo[0]
        let b = combo[1]
        let c = combo[2]
        if (boxesArray[a].innerText &&
            boxesArray[a].innerText === boxesArray[b].innerText &&
            boxesArray[a].innerText === boxesArray[c].innerText) {
            boxesArray[a].style.color = 'green'
            boxesArray[b].style.color = 'green'
            boxesArray[c].style.color = 'green'
            return true
        }
    }
    return false
}

// checking draw

function checkDraw() {
    if (!checkWinner()) {
        let num = 0
        boxesArray.forEach((box) => {
            if (box.innerText !== '') {
                num += 1;
            }
        })
        if (num === 9) {
            result.innerText = 'Its a Draw!'
            result.style.color = 'orange'
        }
    }
}

// function to reset the game
function resetGame() {
    boxesArray.forEach((box) => {
        box.style.color = 'aliceblue'
        box.innerText = ''
        result.innerText = ''
        result.style.color = 'aliceblue'
        currentPlayer = 'X'
    })
}

restart.addEventListener('click', resetGame)
