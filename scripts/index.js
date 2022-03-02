var moves = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

var moveshistory = []

var move
var movecounter = 1
var score1 = 0 //O
var score2 = 0 //X
var scoretie = 0 //tie
var prevvv = document.getElementById("previous")
console.log(prevvv)
var nexxx = document.getElementById("next")
console.log(nexxx)

var a = document.getElementById("i0j0")
var b = document.getElementById("i0j1")
var c = document.getElementById("i0j2")
var d = document.getElementById("i1j0")
var e = document.getElementById("i1j1")
var f = document.getElementById("i1j2")
var g = document.getElementById("i2j0")
var h = document.getElementById("i2j1")
var i = document.getElementById("i2j2")

a.onclick=gamecell()
b.onclick=gamecell()
c.onclick=gamecell()
d.onclick=gamecell()
e.onclick=gamecell()
f.onclick=gamecell()
g.onclick=gamecell()
h.onclick=gamecell()
i.onclick=gamecell()

function displayH() {
    prevvv.style.display = "block"
    nexxx.style.display = "block"
    console.log("displayme")
}

function hideH(){
    prevvv.style.display = "none"
    nexxx.style.display = "none"
    console.log("imhidden")
}



//adds points to O
function winnerO() {
    alert("O wins")
    score1++
    document.getElementById("score1").innerHTML = score1
    document.getElementById("score2").innerHTML = score2
    document.getElementById("scoretie").innerHTML = scoretie

    //display prev and next function
    displayH()
}

//adds points to X
function winnerX() {
    alert("X wins")
    score2++
    document.getElementById("score1").innerHTML = score1
    document.getElementById("score2").innerHTML = score2
    document.getElementById("scoretie").innerHTML = scoretie

    //display prev and next function
    displayH()
}

//identifies gamewinner
function gameWinner() {
    //Horizontal
    if (moves[0][0] === moves[0][1] && moves[0][1] === moves[0][2]) {
        console.log(moves[0][0])
        if ((moves[0][0]) === "O") {
            winnerO()
        } else if ((moves[0][0]) === "X") {
            winnerX()
        }
    } else if (moves[1][0] === moves[1][1] && moves[1][1] === moves[1][2]) {
        console.log(moves[1][0])
        if ((moves[1][0]) === "O") {
            winnerO()
        } else if ((moves[1][0]) === "X") {
            winnerX()
        }
    } else if (moves[2][0] === moves[2][1] && moves[2][1] === moves[2][2]) {
        console.log(moves[2][0])
        if ((moves[2][0]) === "O") {
            winnerO()
        } else if ((moves[2][0]) === "X") {
            winnerX()
        }
    }
    //Vertical
    else if (moves[0][0] === moves[1][0] && moves[1][0] === moves[2][0]) {
        console.log(moves[0][0])
        if ((moves[0][0]) === "O") {
            winnerO()
        } else if ((moves[0][0]) === "X") {
            winnerX()
        }
    } else if (moves[0][1] === moves[1][1] && moves[1][1] === moves[2][1]) {
        console.log(moves[0][1])
        if ((moves[0][1]) === "O") {
            winnerO()
        } else if ((moves[0][1]) === "X") {
            winnerX()
        }
    } else if (moves[0][2] === moves[1][2] && moves[1][2] === moves[2][2]) {
        console.log(moves[0][2])
        if ((moves[0][2]) === "O") {
            winnerO()
        } else if ((moves[0][2]) === "X") {
            winnerX()
        }
    }
    //Slanting
    else if (moves[0][0] === moves[1][1] && moves[1][1] === moves[2][2]) {
        console.log(moves[0][0])
        if ((moves[0][0]) === "O") {
            winnerO()
        } else if ((moves[0][0]) === "X") {
            winnerX()
        }
    } else if (moves[0][2] === moves[1][1] && moves[1][1] === moves[2][0]) {
        console.log(moves[0][2])
        if ((moves[0][2]) === "O") {
            winnerO()
        } else if ((moves[0][2]) === "X") {
            winnerX()
        }
    } else if (movecounter > 9) {
        alert("It's a tie!")
        scoretie++
        document.getElementById("scoretie").innerHTML = scoretie
        document.getElementById("score1").innerHTML = score1
        document.getElementById("score2").innerHTML = score2
        //display prev and next function
        displayH()
    }
}

//initializes when gameboard are clicked
function gamecell() {
    const gameBoard = document.querySelector(".board")
    gameBoard.onclick = e => {
        console.log(e.target); // to get the element
        var clicked = e.target

        //identifies who moves first
        if ((clicked.innerHTML.length) > 0) {
            alert("Invalid move")
        } else {
            if (document.getElementById("one").checked) {
                if ((movecounter % 2) === 0) {
                    move = "X"
                } else {
                    move = "O"
                }
            }
            if (document.getElementById("two").checked) {
                if ((movecounter % 2) === 0) {
                    move = "O"
                } else {
                    move = "X"
                }
            }
            movecounter++
            console.log(`movecounter: ${movecounter}`)

            //adds the move to gameboard cell
            clicked.innerHTML = move
            var cellid = clicked.id
            var cellidi = cellid.charAt(1)
            var cellidinum = parseInt(cellidi)
            var cellidj = cellid.charAt(3)
            var cellidjnum = parseInt(cellidj)
            for (var i = 0; i < moves.length; i++) {
                for (var j = 0; j < moves[i].length; j++) {
                    if (i === cellidinum && j === cellidjnum) {
                        moves[i][j] = move
                        console.log(moves[i][j])
                        console.log(moves)

                        ///save current gameboard into array
                        moveshistory.push(JSON.parse(JSON.stringify(moves)))
                        console.log(moveshistory)
                    }
                }
            }
            //identify winner
            gameWinner()
        }
    }
}


function gameReset() {
    moves = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    movecounter = 1
    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""
    e.textContent = ""
    f.textContent = ""
    g.textContent = ""
    h.textContent = ""
    i.textContent = ""
    hideH()
}

function clearScore() {
    score1 = 0 //O
    score2 = 0 //X
    scoretie = 0 //tie
    document.getElementById("scoretie").innerHTML = scoretie
    document.getElementById("score1").innerHTML = score1
    document.getElementById("score2").innerHTML = score2
}

var displayArray = (moveshistory.length) - 1
hcounter = JSON.parse(JSON.stringify(displayArray))
console.log(typeof hcounter)
console.log(hcounter)


function prev() {
    hcounter--
    console.log(`this will be displayed ${moveshistory[hcounter]}`)
}

function nexx() {
    hcounter++
    console.log(`this will be displayed ${moveshistory[hcounter]}`)
}