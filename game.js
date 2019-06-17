const $cells = document.querySelectorAll(".cell");
let gamer = true;

$cells.forEach(function ($cell) {
    $cell.addEventListener('click', turnTomatoOrOrange);
});

function turnTomatoOrOrange () {
    if (gamer) {
        this.classList.add('tomato');
        this.removeEventListener("click", turnTomatoOrOrange);
    } else {
        this.classList.add('orange');
        this.removeEventListener("click", turnTomatoOrOrange);
    }
    gamer = !gamer;
}
