const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

//consiguracao da bolaaaaaaaaaaaa

let bola = {
    x: canvas.width / 10,
    y: canvas.height / 10,
    radius: 50,
    dx: 2, //velocidade horizontal
    dy: 3,  //velocidade vertical
    color: "#c551bfff",

};

//desenho da bola

function desenhar() {

    ctx.beginPath();
    ctx.arc(bola.x, bola.y, bola.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = bola.color;
    ctx.fill();
    ctx.closePath();

}

//atualizacao da bola

function atualizarPosicaoBola() {

    bola.x += bola.dx;
    bola.y += bola.dy;

    //verifica colisao com as bordas horizontais
    if (bola.x + bola.radius > canvas.width || bola.x - bola.radius < 0) {
        bola.dx = -bola.dx; //inverte a direcao horizontal
    }

    //verifica colisao com as bordas verticais
    if (bola.y + bola.radius > canvas.height || bola.y - bola.radius < 0) {
        bola.dy = -bola.dy; //inverte a direcao vertical
    }

}

//chamar a funcao de animacao

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //limpa o canvas
    desenhar();
    atualizarPosicaoBola();
    requestAnimationFrame(animar); //chama a funcao novamente para o proximo frame
}

//inicia a animacao
animar();