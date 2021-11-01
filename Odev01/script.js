
var cards = document.querySelectorAll('.inlineDiv');
var newGameButtons = document.querySelectorAll('.newGame');
var random = Math.floor(Math.random() * 3);
var gameOver = false;
let clickCount = 0;

cards.forEach(c => c.addEventListener('click', event => {
    clickCount++;
    if (clickCount > 2 || gameOver) {
    } else {
        var clickedCard = event.composedPath();
        var idLetter = toLetter(random);

        if (idLetter == clickedCard[1].id) {
            clickedCard[0].setAttribute('src', 'img/cat.jpg');
        } else {
            clickedCard[0].setAttribute('src', 'img/dog.jpg');
        }

        var clickedCard = event.composedPath();
        var idLetter = toLetter(random);

        if (idLetter == clickedCard[1].id) {
            clickedCard[0].setAttribute('src', 'img/cat.jpg');
            gameOver = true;
            document.getElementById('resultWin').style.display = 'block';
            document.getElementById('start').style.display = 'none';
        } else {
            clickedCard[0].setAttribute('src', 'img/dog.jpg');
            if(clickCount >= 2){
                gameOver = true;
                document.getElementById('start').style.display = 'none';
                document.getElementById('resultLose').style.display = 'block';
            }
        }
    }
}));

newGameButtons.forEach(b => b.addEventListener('click', event =>{
    location.reload();
}));

var toLetter = function (r) {
    if (r == 0)
        return 'one';
    if (r == 1)
        return 'two';
    if (r == 2)
        return 'three';
};