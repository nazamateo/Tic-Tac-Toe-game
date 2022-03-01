var moves = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var move

var movecounter = 1



console.log(moves[0][0])
console.log(moves[0][1])
console.log(moves[0][2])
console.log(moves[1][0])
console.log(moves[1][1])
console.log(moves[1][2])
console.log(moves[2][0])
console.log(moves[2][1])
console.log(moves[2][2])


function gamecell() {
    window.onclick = e => {
        console.log(e.target); // to get the element
        //console.log(e.target.tagName); // to get the element tag name alone
        //console.log(e.target.id); // to get the element id // https://stackoverflow.com/questions/7723188/what-properties-can-i-use-with-event-target
        var clicked = e.target
        console.log(clicked.innerHTML.length)
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
            console.log(cellidi)
            console.log(cellidinum)
            var cellidj = cellid.charAt(3)
            var cellidjnum = parseInt(cellidj)
            console.log(cellidj)
            console.log(cellidjnum)


            console.log(`movecounter: ${movecounter}`)
            for (var i = 0; i < moves.length; i++) {
                for (var j = 0; j < moves[i].length; j++) {
                    if(i===cellidinum && j===cellidjnum){
                    moves[i][j]=move
                    console.log(moves[i][j])
                    }

                }
            }
        }

        console.log(moves)


    }
}