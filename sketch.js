function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let labirinto = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,1,0,0,0,0,1],
  [1,0,1,0,1,0,1,1,0,1],
  [1,0,1,0,0,0,0,1,0,1],
  [1,0,1,1,1,1,0,1,0,1],
  [1,0,0,0,0,1,0,1,0,1],
  [1,1,1,1,0,1,0,1,0,1],
  [1,0,0,1,0,1,0,0,0,1],
  [1,0,0,0,0,0,0,1,0,2],
  [1,1,1,1,1,1,1,1,1,1]
];

let tamanhoCelula = 40;
let jogador = { x: 1, y: 1 };

function setup() {
  createCanvas(10 * tamanhoCelula, 10 * tamanhoCelula);
}

function draw() {
  background(220);
  desenharLabirinto();
  desenharJogador();

  if (labirinto[jogador.y][jogador.x] === 2) {
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Você venceu!", width / 2, height / 2);
    noLoop();
  }
}

function desenharLabirinto() {
  for (let y = 0; y < labirinto.length; y++) {
    for (let x = 0; x < labirinto[y].length; x++) {
      if (labirinto[y][x] === 1) {
        fill(0); // parede
      } else if (labirinto[y][x] === 2) {
        fill(0, 255, 0); // saída
      } else {
        fill(255); // caminho
      }
      stroke(150);
      rect(x * tamanhoCelula, y * tamanhoCelula, tamanhoCelula, tamanhoCelula);
    }
  }
}

function desenharJogador() {
  fill(0, 0, 255);
  rect(jogador.x * tamanhoCelula, jogador.y * tamanhoCelula, tamanhoCelula, tamanhoCelula);
}

function keyPressed() {
  let novoX = jogador.x;
  let novoY = jogador.y;

  if (keyCode === LEFT_ARROW) novoX--;
  else if (keyCode === RIGHT_ARROW) novoX++;
  else if (keyCode === UP_ARROW) novoY--;
  else if (keyCode === DOWN_ARROW) novoY++;

  // Verifica se a nova posição é válida
  if (labirinto[novoY][novoX] !== 1) {
    jogador.x = novoX;
    jogador.y = novoY;
  }
}