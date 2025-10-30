const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

//configuracoes do quadrado

// let square = {
//     x: canvas.width / 2 - 25,
//     y: canvas.height / 2 - 25,
//     size: 50,
//     color: "#ff5733",
//     speed: 5
// };

let square = {

    x: 200,
    y: 200,
    size: 100,
    color: "#ff33ccff",
    speed: 60

};

function drawSquare() {

    ctx.beginPath();

    ctx.clearRect(0, 0, canvas.width, canvas.height); //limpa o canvas

    ctx.fillStyle = square.color;
    ctx.fillRect(square.x, square.y, square.size, square.size);

}

function moveSquare(event) {

    if(key === 'ArrowUp' && square.y > 0) {

        square.y -= square.speed; //move para cima

    } else if(key === 'ArrowDown' && square.y + square.size < canvas.height) {

        square.y += square.speed; //move para baixo

    } else if(key === 'ArrowLeft' && square.x > 0) {

        square.x -= square.speed; //move para esquerda

    } else if(key === 'ArrowRight' && square.x + square.size < canvas.width) {

        square.x += square.speed; //move para direita

    }

    drawSquare();

}

drawSquare(); //desenha o quadrado inicialmente

//adiciona o listener para eventos de teclado

let key = '';

window.addEventListener('keydown', function(event) {

    key = event.key;
    moveSquare(key);

});

window.addEventListener('keyup', function(event) {

    key = '';

}); 

