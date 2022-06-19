let stage = document.querySelector('#cenario');
let ctx = stage.getContext('2d');
document.addEventListener('keydown',keyPush);

const vel = 1; // casas que a cobrinha vai andar quando pasar por dentro
var vx = vy = 0;
var px = py = 10; // posição da cabeça da cobra
var tp = 20;
var qp = 20;
var ax = ay = 15;

var trail = []; // rastro da cobra
tail = 5; // tamanho da calda
setInterval(game,60);

function game(){
  px += vx; 
  py += vy;
  if(px < 0 ){
    px = qp -1 ; // cobrinha ultrapassando as bordas
  }
  if(px > qp -1){
    px = 0;
  }
  if(py < 0) {
    py = qp -1;
  }
  if(py > qp -1){
    py = 0; 
  }

  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,stage.width,stage.height);

  ctx.fillStyle = 'red';
  ctx.fillRect(ax*tp,ay*tp,tp,tp) // pintando a maça na tela

  ctx.fillStyle = 'gray';
  for(var i =0; i<trail.length; i++){
    ctx.fillRect(trail[i].x*tp, trail[i].y*tp ,tp-1,tp-1 )
    if(trail[i].x == px && trail[i].y == py){
      vx = vy = 0;
      tail = 5;
      
    }
  }
  trail.push({x: px,  // MOVIMENTO DA COBRA 
  y: py
})
while(trail.length > tail){ // removendo elemento da calda;
  trail.shift();
}
if(ax == px && ay ==py){ // colocando + 1 elemento na calda da cobra
  tail ++;
  ax = Math.floor(Math.random()* qp); // posicionando a maça em outro local do tabuleiro
  ay = Math.floor(Math.random() * qp);
}
}

function keyPush (event){
  switch(event.keyCode){ //para descer a velocidade é positiva e para subir é negativa
    case 37: //left
    vx = -vel;
    vy = 0;

    break;
    case 38: //up
    vx =0;
    vy = -vel;
      break;
      case 39: // right
      vx = vel;
      vy = 0;
        break;
        case 40: //down
        vx = 0;
        vy = vel;
          break;
    
  }

}



