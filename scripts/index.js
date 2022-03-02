var moves = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

var moveshistory = []

var m1 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
var m2 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
var m3 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
var m4 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
var m5 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
var m6 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
var m7 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
var m8 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
var m9 = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

var move
var movecounter = 1
var score1 = 0 //O
var score2 = 0 //X
var scoretie = 0 //tie

//adds points to O
function winnerO() {
    alert("O wins")
    score1++
    document.getElementById("score1").innerHTML = score1
    document.getElementById("score2").innerHTML = score2
    document.getElementById("scoretie").innerHTML = scoretie
}

//adds points to X
function winnerX() {
    alert("X wins")
    score2++
    document.getElementById("score1").innerHTML = score1
    document.getElementById("score2").innerHTML = score2
    document.getElementById("scoretie").innerHTML = scoretie
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
            alert("this cell is occupied")
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
                    }
                }
            }

            ///save current gameboard into array




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
    document.getElementById("i0j0").textContent = ""
    document.getElementById("i0j1").textContent = ""
    document.getElementById("i0j2").textContent = ""
    document.getElementById("i1j0").textContent = ""
    document.getElementById("i1j1").textContent = ""
    document.getElementById("i1j2").textContent = ""
    document.getElementById("i2j0").textContent = ""
    document.getElementById("i2j1").textContent = ""
    document.getElementById("i2j2").textContent = ""
}

function clearScore() {
    score1 = 0 //O
    score2 = 0 //X
    scoretie = 0 //tie
    document.getElementById("scoretie").innerHTML = scoretie
    document.getElementById("score1").innerHTML = score1
    document.getElementById("score2").innerHTML = score2
}



/**if(movecounter=2){
                            m1[0][0] = document.getElementById("i0j0").textContent
                            m1[0][1] = document.getElementById("i0j1").textContent
                            m1[0][2] = document.getElementById("i0j2").textContent 
                            m1[1][0] = document.getElementById("i1j0").textContent
                            m1[1][1] = document.getElementById("i1j1").textContent
                            m1[1][2] = document.getElementById("i1j2").textContent
                            m1[2][0] = document.getElementById("i2j0").textContent
                            m1[2][1] = document.getElementById("i2j1").textContent
                            m1[2][2] = document.getElementById("i2j2").textContent
                            console.log(`m1: ${m1}`)
                            }
                            
                            if(movecounter=3){
                            m2[0][0] = document.getElementById("i0j0").textContent
                            m2[0][1] = document.getElementById("i0j1").textContent
                            m2[0][2] = document.getElementById("i0j2").textContent 
                            m2[1][0] = document.getElementById("i1j0").textContent
                            m2[1][1] = document.getElementById("i1j1").textContent
                            m2[1][2] = document.getElementById("i1j2").textContent
                            m2[2][0] = document.getElementById("i2j0").textContent
                            m2[2][1] = document.getElementById("i2j1").textContent
                            m2[2][2] = document.getElementById("i2j2").textContent
                            }
                            
                            if(movecounter=4){
                            m3[0][0] = document.getElementById("i0j0").textContent
                            m3[0][1] = document.getElementById("i0j1").textContent
                            m3[0][2] = document.getElementById("i0j2").textContent 
                            m3[1][0] = document.getElementById("i1j0").textContent
                            m3[1][1] = document.getElementById("i1j1").textContent
                            m3[1][2] = document.getElementById("i1j2").textContent
                            m3[2][0] = document.getElementById("i2j0").textContent
                            m3[2][1] = document.getElementById("i2j1").textContent
                            m3[2][2] = document.getElementById("i2j2").textContent
                            }
                            
                            
                            
                            if(movecounter=5){
                            m4[0][0] = document.getElementById("i0j0").textContent
                            m4[0][1] = document.getElementById("i0j1").textContent
                            m4[0][2] = document.getElementById("i0j2").textContent 
                            m4[1][0] = document.getElementById("i1j0").textContent
                            m4[1][1] = document.getElementById("i1j1").textContent
                            m4[1][2] = document.getElementById("i1j2").textContent
                            m4[2][0] = document.getElementById("i2j0").textContent
                            m4[2][1] = document.getElementById("i2j1").textContent
                            m4[2][2] = document.getElementById("i2j2").textContent
                            }
                            
                            if(movecounter=6){
                            m5[0][0] = document.getElementById("i0j0").textContent
                            m5[0][1] = document.getElementById("i0j1").textContent
                            m5[0][2] = document.getElementById("i0j2").textContent 
                            m5[1][0] = document.getElementById("i1j0").textContent
                            m5[1][1] = document.getElementById("i1j1").textContent
                            m5[1][2] = document.getElementById("i1j2").textContent
                            m5[2][0] = document.getElementById("i2j0").textContent
                            m5[2][1] = document.getElementById("i2j1").textContent
                            m5[2][2] = document.getElementById("i2j2").textContent
                            }
                            
                            
                            if(movecounter=7){
                            m6[0][0] = document.getElementById("i0j0").textContent
                            m6[0][1] = document.getElementById("i0j1").textContent
                            m6[0][2] = document.getElementById("i0j2").textContent 
                            m6[1][0] = document.getElementById("i1j0").textContent
                            m6[1][1] = document.getElementById("i1j1").textContent
                            m6[1][2] = document.getElementById("i1j2").textContent
                            m6[2][0] = document.getElementById("i2j0").textContent
                            m6[2][1] = document.getElementById("i2j1").textContent
                            m6[2][2] = document.getElementById("i2j2").textContent
                            }
                            
                            
                            
                            if(movecounter=8){
                            m7[0][0] = document.getElementById("i0j0").textContent
                            m7[0][1] = document.getElementById("i0j1").textContent
                            m7[0][2] = document.getElementById("i0j2").textContent 
                            m7[1][0] = document.getElementById("i1j0").textContent
                            m7[1][1] = document.getElementById("i1j1").textContent
                            m7[1][2] = document.getElementById("i1j2").textContent
                            m7[2][0] = document.getElementById("i2j0").textContent
                            m7[2][1] = document.getElementById("i2j1").textContent
                            m7[2][2] = document.getElementById("i2j2").textContent
                            }
                            
                            if(movecounter=9){
                            m8[0][0] = document.getElementById("i0j0").textContent
                            m8[0][1] = document.getElementById("i0j1").textContent
                            m8[0][2] = document.getElementById("i0j2").textContent 
                            m8[1][0] = document.getElementById("i1j0").textContent
                            m8[1][1] = document.getElementById("i1j1").textContent
                            m8[1][2] = document.getElementById("i1j2").textContent
                            m8[2][0] = document.getElementById("i2j0").textContent
                            m8[2][1] = document.getElementById("i2j1").textContent
                            m8[2][2] = document.getElementById("i2j2").textContent
                            }
                            
                            
                            
                            if(movecounter=10){
                            m9[0][0] = document.getElementById("i0j0").textContent
                            m9[0][1] = document.getElementById("i0j1").textContent
                            m9[0][2] = document.getElementById("i0j2").textContent 
                            m9[1][0] = document.getElementById("i1j0").textContent
                            m9[1][1] = document.getElementById("i1j1").textContent
                            m9[1][2] = document.getElementById("i1j2").textContent
                            m9[2][0] = document.getElementById("i2j0").textContent
                            m9[2][1] = document.getElementById("i2j1").textContent
                            m9[2][2] = document.getElementById("i2j2").textContent
                            }*/