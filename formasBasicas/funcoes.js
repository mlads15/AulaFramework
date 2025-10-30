const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(150, 100, 50, 0, Math.PI * 2, false); //posição x, posição y, raio e ângulo inicial e final
ctx.fillStyle = 'green'; //fillStyle = cor de preenchimento
ctx.fill();
ctx.lineWidth = 3; //lineWidth = largura da borda
ctx.strokeStyle = '#003300'; //strokeStyle = cor da borda
ctx.stroke();
ctx.closePath();

//arc = circulo, rect = retangulo, fillRect = retangulo preenchido, clearRect = limpa area do retangulo

ctx.beginPath();
ctx.rect(50, 200, 200, 100);
ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
ctx.fill();
ctx.lineWidth = 3;
ctx.strokeStyle = 'blue';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.rect(300, 50, 150, 400);
ctx.fillStyle = 'rgba(255, 0, 119, 0.5)';
ctx.fill();
ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(50, 300); //posição inicial da linha -- primeiro ponto
ctx.lineTo(300, 300); //posição final da linha -- segundo ponto
ctx.lineTo(200, 300); //posição final da linha -- terceiro ponto
ctx.lineTo(350, 400);


ctx.lineWidth = 5;
ctx.strokeStyle = 'purple';
ctx.stroke();
ctx.closePath();




























// // formas/funcoes.js

// // Função para desenhar um retângulo
// function desenharRetangulo(x, y, largura, altura, cor) {
//     ctx.fillStyle = cor;
//     ctx.fillRect(x, y, largura, altura);
// }

// // Função para desenhar um círculo
// function desenharCirculo(x, y, raio, cor) {
//     ctx.fillStyle = cor;
//     ctx.beginPath();
//     ctx.arc(x, y, raio, 0, Math.PI * 2);
//     ctx.fill();
// }

// // Função para desenhar uma linha
// function desenharLinha(x1, y1, x2, y2, cor, largura) {
//     ctx.strokeStyle = cor;
//     ctx.lineWidth = largura;
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.stroke();
// }

// // Exemplo de uso das funções
// desenharRetangulo(50, 50, 150, 100, 'blue');
// desenharCirculo(300, 150, 50, 'red');
// desenharLinha(50, 200, 400, 200, 'green', 5);   

// Desenha uma Hello Kitty simples usando formas básicas
function drawHelloKitty(cx = 200, cy = 160, scale = 1) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    // Corpo (elipse)
    ctx.beginPath();
    ctx.ellipse(0, 80, 70, 90, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.closePath();

    // Cabeça (círculo/óvalo)
    ctx.beginPath();
    ctx.ellipse(0, 0, 85, 70, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.closePath();

    // Orelhas (triângulos com interno rosa)
    function drawEar(x, y, flip = 1) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 25 * flip, y - 40);
        ctx.lineTo(x - 10 * flip, y - 10);
        ctx.closePath();
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x + (flip === 1 ? 2 : -2), y - 6);
        ctx.lineTo(x + 18 * flip, y - 28);
        ctx.lineTo(x - 2 * flip, y - 20);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255,150,180,0.9)';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    drawEar(-45, -40, -1); // esquerda
    drawEar(45, -40, 1);   // direita

    // Olhos (ovais pretos)
    function eye(x, y) {
        ctx.beginPath();
        ctx.ellipse(x, y, 8, 12, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#000000';
        ctx.fill();
        ctx.closePath();

        // brilho pequeno
        ctx.beginPath();
        ctx.fillStyle = '#ffffff';
        ctx.arc(x - 3, y - 4, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
    eye(-22, 0);
    eye(22, 0);

    // Nariz (oval amarelo)
    ctx.beginPath();
    ctx.ellipse(0, 12, 9, 6, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#ffcc33';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Bigodes (linhas)
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    const whiskerY = [8, 15, 22];
    whiskerY.forEach((dy, i) => {
        // esquerda
        ctx.beginPath();
        ctx.moveTo(-10, dy);
        ctx.lineTo(-70, dy - (i - 1) * 4);
        ctx.stroke();
        ctx.closePath();
        // direita
        ctx.beginPath();
        ctx.moveTo(10, dy);
        ctx.lineTo(70, dy - (1 - i) * 4);
        ctx.stroke();
        ctx.closePath();
    });

    // Laço (bow) - direita superior da cabeça
    // laço esquerdo
    ctx.beginPath();
    ctx.ellipse(50, -36, 18, 14, -0.5, 0, Math.PI * 2);
    ctx.fillStyle = '#ff3366';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // laço direito
    ctx.beginPath();
    ctx.ellipse(76, -36, 18, 14, 0.5, 0, Math.PI * 2);
    ctx.fillStyle = '#ff3366';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // centro do laço
    ctx.beginPath();
    ctx.arc(63, -34, 9, 0, Math.PI * 2);
    ctx.fillStyle = '#ffcc33';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
}

// Limpa o canvas e desenha a Hello Kitty em alguns tamanhos/posições como exemplo
// function clearAndDraw() {
//     canvas.width = canvas.width; // limpa canvas (mantém tamanho)
//     drawHelloKitty(200, 160, 1.2); // principal
//     drawHelloKitty(420, 200, 0.9); // secundária
//     drawHelloKitty(80, 360, 0.7);  // pequena
// }

// // Se desejar, chama ao carregar o script
// clearAndDraw();
// drawHelloKitty();

drawHelloKitty(200, 160, 1.2); // principal
// drawHelloKitty(420, 200, 0.9); // secundária
// drawHelloKitty(80, 360, 0.7);  // pequena

// ...existing code...

// Desenha o Pompompurin (Hello Kitty and Friends) usando formas básicas
function drawPompompurin(cx = 420, cy = 220, scale = 1) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(scale, scale);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    const bodyColor = '#f5c66a';   // amarelo claro
    const earColor = '#8b5a2b';    // marrom das orelhas
    const beretColor = '#6b3f1d';  // boina
    const stroke = '#2f1f12';

    // Corpo
    ctx.beginPath();
    ctx.ellipse(0, 70, 75, 55, 0, 0, Math.PI * 2);
    ctx.fillStyle = bodyColor;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = stroke;
    ctx.stroke();
    ctx.closePath();

    // Cabeça
    ctx.beginPath();
    ctx.ellipse(0, 0, 70, 60, 0, 0, Math.PI * 2);
    ctx.fillStyle = bodyColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Orelhas caídas (esquerda)
    ctx.beginPath();
    ctx.ellipse(-48, 18, 16, 28, 0.6, 0, Math.PI * 2);
    ctx.fillStyle = earColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Orelha direita
    ctx.beginPath();
    ctx.ellipse(48, 18, 16, 28, -0.6, 0, Math.PI * 2);
    ctx.fillStyle = earColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Boina (beret) por cima da cabeça (ligeramente deslocada para a direita/ cima)
    ctx.beginPath();
    ctx.ellipse(10, -38, 36, 22, -0.4, 0, Math.PI * 2);
    ctx.fillStyle = beretColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // "Botão" da boina
    ctx.beginPath();
    ctx.arc(-8, -42, 6, 0, Math.PI * 2);
    ctx.fillStyle = beretColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Olhos
    ctx.beginPath();
    ctx.ellipse(-18, -6, 6, 8, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#2b2b2b';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(18, -6, 6, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // Nariz
    ctx.beginPath();
    ctx.ellipse(0, 6, 6, 4, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#2b2b2b';
    ctx.fill();
    ctx.closePath();

    // Boca (linha simples)
    ctx.beginPath();
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2;
    ctx.moveTo(-6, 18);
    ctx.quadraticCurveTo(0, 24, 6, 18);
    ctx.stroke();
    ctx.closePath();

    // Bochechas
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,140,160,0.6)';
    ctx.arc(-30, 6, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(30, 6, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // Rabo pequeno (direita)
    ctx.beginPath();
    ctx.ellipse(62, 82, 12, 8, 0.8, 0, Math.PI * 2);
    ctx.fillStyle = bodyColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Patinhas dianteiras
    ctx.beginPath();
    ctx.ellipse(-30, 110, 14, 10, 0, 0, Math.PI * 2);
    ctx.fillStyle = bodyColor;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(30, 110, 14, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
}

// ...existing code...

// Chamadas de exemplo (adicione ou remova conforme desejar)

drawPompompurin(420, 220, 1.0);