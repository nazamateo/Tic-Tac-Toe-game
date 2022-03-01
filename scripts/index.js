var moves = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
var moveshistory = []
//
//

var move

var movecounter = 1
var score1 = 0 //O
var score2 = 0 //X
var scoretie = 0 //tie

/*
console.log(moves[0][0])
console.log(moves[0][1])
console.log(moves[0][2])
console.log(moves[1][0])
console.log(moves[1][1])
console.log(moves[1][2])
console.log(moves[2][0])
console.log(moves[2][1])
console.log(moves[2][2])
*/

function gamecell() {
    const gameBoard = document.querySelector(".board")
    gameBoard.onclick = e => {
        console.log(e.target); // to get the element
        //console.log(e.target.tagName); // to get the element tag name alone
        //console.log(e.target.id); // to get the element id // https://stackoverflow.com/questions/7723188/what-properties-can-i-use-with-event-target
        var clicked = e.target
        //console.log(clicked.innerHTML.length)
        if ((clicked.innerHTML.length) > 0) {
            alert("this cell is occupied")
        } else {
            if ((movecounter % 2) === 0) {
                move = "X"
            } else {
                move = "O"
            }
            movecounter++
            clicked.innerHTML = move
            var cellid = clicked.id
            var cellidi = cellid.charAt(1)
            var cellidinum = parseInt(cellidi)
            //console.log(cellidi)
            //console.log(cellidinum)
            var cellidj = cellid.charAt(3)
            var cellidjnum = parseInt(cellidj)
            //console.log(cellidj)
            //console.log(cellidjnum)
            console.log(`movecounter: ${movecounter}`)
            for (var i = 0; i < moves.length; i++) {
                for (var j = 0; j < moves[i].length; j++) {
                    if (i === cellidinum && j === cellidjnum) {
                        moves[i][j] = move
                        console.log(moves[i][j])

                    }
                }
            }
            //Horizontal
            if (moves[0][0] === moves[0][1] && moves[0][1] === moves[0][2]) {
                console.log(moves[0][0])
                if ((moves[0][0]) === "O") {
                    alert("Player 1 wins")
                    score1++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    


                } else if ((moves[0][0]) === "X") {
                    alert("Player 2 wins")
                    score2++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    
                }

            } else if (moves[1][0] === moves[1][1] && moves[1][1] === moves[1][2]) {
                console.log(moves[1][0])
                if ((moves[1][0]) === "O") {
                    alert("Player 1 wins")
                    score1++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    
                } else if ((moves[1][0]) === "X") {
                    alert("Player 2 wins")
                    score2++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    

                }
            } else if (moves[2][0] === moves[2][1] && moves[2][1] === moves[2][2]) {
                console.log(moves[2][0])
                if ((moves[2][0]) === "O") {
                    alert("Player 1 wins")
                    score1++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    
                } else if ((moves[2][0]) === "X") {
                    alert("Player 2 wins")
                    score2++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    
                }
            }
            //Vertical
            else if (moves[0][0] === moves[1][0] && moves[1][0] === moves[2][0]) {
                console.log(moves[0][0])
                if ((moves[0][0]) === "O") {
                    alert("Player 1 wins")
                    score1++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    
                } else if ((moves[0][0]) === "X") {
                    alert("Player 2 wins")
                    score2++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    

                }
            } else if (moves[0][1] === moves[1][1] && moves[1][1] === moves[2][1]) {
                console.log(moves[0][1])
                if ((moves[0][1]) === "O") {
                    alert("Player 1 wins")
                    score1++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    
                } else if ((moves[0][1]) === "X") {
                    alert("Player 2 wins")
                    score2++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    

                }
            } else if (moves[0][2] === moves[1][2] && moves[1][2] === moves[2][2]) {
                console.log(moves[0][2])
                if ((moves[0][2]) === "O") {
                    alert("Player 1 wins")
                    score1++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    
                } else if ((moves[0][2]) === "X") {
                    alert("Player 2 wins")
                    score2++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    

                }
            }
            //Slanting
            else if (moves[0][0] === moves[1][1] && moves[1][1] === moves[2][2]) {
                console.log(moves[0][0])
                if ((moves[0][0]) === "O") {
                    alert("Player 1 wins")
                    score1++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    
                } else if ((moves[0][0]) === "X") {
                    alert("Player 2 wins")
                    score2++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    

                }
            } else if (moves[0][2] === moves[1][1] && moves[1][1] === moves[2][0]) {
                console.log(moves[0][2])
                if ((moves[0][2]) === "O") {
                    alert("Player 1 wins")
                    score1++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                    
                    
                } else if ((moves[0][2]) === "X") {
                    alert("Player 2 wins")
                    score2++
                    document.getElementById("score1").innerHTML = score1
                    document.getElementById("score2").innerHTML = score2
                    document.getElementById("scoretie").innerHTML = scoretie
                }
            } else if (movecounter > 9) {
                alert("It's a tie!")
                scoretie++
                document.getElementById("scoretie").innerHTML = scoretie
                document.getElementById("score1").innerHTML = score1
                document.getElementById("score2").innerHTML = score2
                
                
            }

        }




        //console.log(moves)
        //console.log(score1)
        //console.log(`p1score ${score1}`)
    }
    //console.log(score1)
    //console.log(`p1score ${score1}`)
    //console.log(`p2score ${score2}`)
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

