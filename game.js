const $cells = document.querySelectorAll(".cell");
let gamer = true;
const status = [];

function findWinner() {
    const winnerCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winnerCombination.length; i++) {
        const [a,b,c] = winnerCombination[i];
        if (status[a] === status[b] && status[b] === status[c]) return status[a];
    }

    return null;
}

$cells.forEach(function ($cell, index) {
    $cell.addEventListener('click', turnTomatoOrOrange);
    $cell.classList.add(index);
});

function turnTomatoOrOrange () {
    if (gamer) {
        this.classList.add('tomato');
        this.removeEventListener("click", turnTomatoOrOrange);
        status[this.classList[1]] = 'tomato';
    } else {
        this.classList.add('orange');
        this.removeEventListener("click", turnTomatoOrOrange);
        status[this.classList[1]] = 'orange';
    }
    gamer = !gamer;

    const result = findWinner();

    if(result){
        
    }
}