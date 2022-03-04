
var moves = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

var movesundoredo = []

var historylist = [
    ["top-left", "top-mid", "top-right"],
    ["center-left", "center", "center-right"],
    ["bottom-left", "bottom-center", "bottom-right"]
]

var moveshistory = []
var move
var movecounter = 1
var score1 = 0 //O
var score2 = 0 //X
var scoretie = 0 //tie
var prevvv = document.getElementById("previous")
var nexxx = document.getElementById("next")
var undo = document.getElementById("undo")
var redo = document.getElementById("redo")




var a = document.getElementById("i0j0")
var b = document.getElementById("i0j1")
var c = document.getElementById("i0j2")
var d = document.getElementById("i1j0")
var e = document.getElementById("i1j1")
var f = document.getElementById("i1j2")
var g = document.getElementById("i2j0")
var h = document.getElementById("i2j1")
var i = document.getElementById("i2j2")

a.onclick = gamecell()
b.onclick = gamecell()
c.onclick = gamecell()
d.onclick = gamecell()
e.onclick = gamecell()
f.onclick = gamecell()
g.onclick = gamecell()
h.onclick = gamecell()
i.onclick = gamecell()

//undoredo
var undoredoclick = 0
var savethisundoredo
var recentclicked

var startx
var starty
var endx
var endy


function undoA() {
    if (undoredoclick !== 0) {
        alert("invalid")
    } else if (undoredoclick === 0) {
        const hist = document.getElementById("history")
        savethisundoredo = hist.lastChild //save this
        hist.removeChild(hist.lastChild);
        console.log(hist)
        console.log(savethisundoredo)
        movesundoredo.push(move)
        console.log(movesundoredo)
        recentclicked.innerHTML = ""
        undoredoclick = 1
        movecounter--
    }
}

function redoA() {
    if (undoredoclick === 1) {
        const hist = document.getElementById("history")
        hist.appendChild(savethisundoredo)
        console.log(savethisundoredo)
        recentclicked.innerHTML = move
        undoredoclick = 2
        movecounter++

    } else {
        alert("invalid")
    }
}


function displayH() {
    prevvv.style.display = "block"
    nexxx.style.display = "block"
    redo.style.display = "none"
    undo.style.display = "none"
    a.textContent = moves[0][0]
    b.textContent = moves[0][1]
    c.textContent = moves[0][2]
    d.textContent = moves[1][0]
    e.textContent = moves[1][1]
    f.textContent = moves[1][2]
    g.textContent = moves[2][0]
    h.textContent = moves[2][1]
    i.textContent = moves[2][2]
    console.log("displayme")
}

function hideH() {
    prevvv.style.display = "none"
    nexxx.style.display = "none"
    redo.style.display = "block"
    undo.style.display = "block"
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
    var displayArray = (moveshistory.length) - 1 //8
    hcounter = JSON.parse(JSON.stringify(displayArray)) //8
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
    var displayArray = (moveshistory.length) - 1 //8
    hcounter = JSON.parse(JSON.stringify(displayArray)) //8
    displayH()
}

//identifies gamewinner
function gameWinner() {
    //Horizontal
    if (moves[0][0] === moves[0][1] && moves[0][1] === moves[0][2]) {
        console.log(moves[0][0])
startx = 0
starty = 88
endx = 530
endy = 88
        if ((moves[0][0]) === "O") {
            winnerO()
        } else if ((moves[0][0]) === "X") {
            winnerX()
        }
    } else if (moves[1][0] === moves[1][1] && moves[1][1] === moves[1][2]) {
        console.log(moves[1][0])
        startx = 0
starty = 265
endx = 530
endy = 265
        if ((moves[1][0]) === "O") {
            winnerO()
        } else if ((moves[1][0]) === "X") {
            winnerX()
        }
    } else if (moves[2][0] === moves[2][1] && moves[2][1] === moves[2][2]) {
        console.log(moves[2][0])
        startx = 0
starty = 442
endx = 530
endy = 442
        if ((moves[2][0]) === "O") {
            winnerO()
        } else if ((moves[2][0]) === "X") {
            winnerX()
        }
    }
    //Vertical
    else if (moves[0][0] === moves[1][0] && moves[1][0] === moves[2][0]) {
        console.log(moves[0][0])
        startx = 88
starty = 0
endx = 88
endy = 530
        if ((moves[0][0]) === "O") {
            winnerO()
        } else if ((moves[0][0]) === "X") {
            winnerX()
        }
    } else if (moves[0][1] === moves[1][1] && moves[1][1] === moves[2][1]) {
        console.log(moves[0][1])
        startx = 265
starty = 0
endx = 265
endy = 530
        if ((moves[0][1]) === "O") {
            winnerO()
        } else if ((moves[0][1]) === "X") {
            winnerX()
        }
    } else if (moves[0][2] === moves[1][2] && moves[1][2] === moves[2][2]) {
        console.log(moves[0][2])
        startx = 442
starty = 0
endx = 442
endy = 530
        if ((moves[0][2]) === "O") {
            winnerO()
        } else if ((moves[0][2]) === "X") {
            winnerX()
        }
    }
    //Slanting
    else if (moves[0][0] === moves[1][1] && moves[1][1] === moves[2][2]) {
        console.log(moves[0][0])
        startx = 0
starty = 0
endx = 530
endy = 530
        if ((moves[0][0]) === "O") {
            winnerO()
        } else if ((moves[0][0]) === "X") {
            winnerX()
        }
    } else if (moves[0][2] === moves[1][1] && moves[1][1] === moves[2][0]) {
        console.log(moves[0][2])
        startx = 530
starty = 0
endx = 0
endy = 530
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
        var displayArray = (moveshistory.length) - 1 //8
        hcounter = JSON.parse(JSON.stringify(displayArray)) //8
        
        displayH()
    }
    draw()
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

            clicked.animate([
                // keyframes
                {
                    transform: 'scale(0.5)',
                    opacity: '.5'
                },
                {
                    transform: 'scale(0.6)',
                    opacity: '0.6'
                },
                {
                    transform: 'scale(0.7)',
                    opacity: '0.7'
                },
                {
                    transform: 'scale(0.8)',
                    opacity: '0.8'
                },
                {
                    transform: 'scale(0.9)',
                    opacity: '0.9'
                },
                {
                    transform: 'scale(1)',
                    opacity: '1'
                }

            ], {
                // timing options
                duration: 400,

            });

            //adds the move to gameboard cell
            clicked.innerHTML = move
            recentclicked = clicked
            console.log(recentclicked)
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

                        if (move === "X") {
                            clicked.style.color = "red"
                        } else if (move === "O") {
                            clicked.style.color = 'blue'
                        }
                        //record and display moveshistory
                        const newP = document.createElement("h2")
                        newP.textContent = `${movecounter-1}. ${move} @ ${historylist[i][j]}`
                        console.log(newP)
                        const hist = document.getElementById("history")
                        console.log(hist)
                        hist.appendChild(newP)
                        movesundoredo = []
                        undoredoclick = 0
                    }
                }
            }
            /** 
                        for (var i = 0; i < moves.length; i++) {
                            for (var j = 0; j < moves[i].length; j++) {
                                if (i === cellidinum && j === cellidjnum) {
                                    movesundoredo[i][j] = move
                                    ///save current gameboard into array redoundo
                                    undoredopushpop.push(JSON.parse(JSON.stringify(movesundoredo)))
                                    console.log(undoredopushpop)

                                }
                            }
                        }*/

            //identify winner

            if (movecounter > 5) {
                gameWinner()
            }
        }
    }
}


function gameReset() {
    moves = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    moveshistory = []
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
    const hist = document.getElementById("history")
    hist.innerHTML = ""
    undraw()
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

function prev() {
    if (hcounter === 0) {
        alert("invalid")
    } else {
        hcounter--
        a.textContent = moveshistory[hcounter][0][0]
        b.textContent = moveshistory[hcounter][0][1]
        c.textContent = moveshistory[hcounter][0][2]
        d.textContent = moveshistory[hcounter][1][0]
        e.textContent = moveshistory[hcounter][1][1]
        f.textContent = moveshistory[hcounter][1][2]
        g.textContent = moveshistory[hcounter][2][0]
        h.textContent = moveshistory[hcounter][2][1]
        i.textContent = moveshistory[hcounter][2][2]
        console.log(typeof hcounter)
        console.log(hcounter) //8
        console.log(`this will be displayed ${moveshistory[hcounter]}`)
        undraw()
    }
}

function nexx() {
    if (hcounter === (moveshistory.length - 1)) {
        alert("invalid")
    } else {
        hcounter++
        a.textContent = moveshistory[hcounter][0][0]
        b.textContent = moveshistory[hcounter][0][1]
        c.textContent = moveshistory[hcounter][0][2]
        d.textContent = moveshistory[hcounter][1][0]
        e.textContent = moveshistory[hcounter][1][1]
        f.textContent = moveshistory[hcounter][1][2]
        g.textContent = moveshistory[hcounter][2][0]
        h.textContent = moveshistory[hcounter][2][1]
        i.textContent = moveshistory[hcounter][2][2]
        console.log(typeof hcounter)
        console.log(hcounter) //8
        console.log(`this will be displayed ${moveshistory[hcounter]}`)
        undraw()
    }
}


function draw() {
    const canvass = document.getElementById("canvass")
    const ctx = canvass.getContext("2d")

    canvass.animate([
        // keyframes
        {
            transform: 'scale(0.5)',
            opacity: '.5'
        },
        {
            transform: 'scale(0.6)',
            opacity: '0.6'
        },
        {
            transform: 'scale(0.7)',
            opacity: '0.7'
        },
        {
            transform: 'scale(0.8)',
            opacity: '0.8'
        },
        {
            transform: 'scale(0.9)',
            opacity: '0.9'
        },
        {
            transform: 'scale(1)',
            opacity: '1'
        }

    ], {
        // timing options
        duration: 400,

    });




    // set line stroke and line width
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 8

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(startx, starty)
    ctx.lineTo(endx, endy)
    ctx.lineCap = "round"
    ctx.stroke()
    console.log("draw")
    const savage = document.getElementById("savage")
    savage.style.zIndex = "5"
}

function undraw(){
    const canvass = document.getElementById("canvass")
    const context = canvass.getContext("2d")

    
    context.clearRect(0, 0, canvass.width, canvass.height)
    console.log("undraw")
    const savage = document.getElementById("savage")
    savage.style.zIndex = "-1"
}