let paddlePlayer;
let paddleAi;
let ball;
let scorePlayer;
let scoreAi;

function setup() {
  createCanvas(634, 350);
  paddlePlayer = new Paddle(26);
  paddleAi = new Paddle (width-48);
  ball = new Ball();
}
 
function draw() {
  
  background(200);
  paddlePlayer.display();
  paddleAi.display();
  
  paddlePlayer.update();
  paddleAi.update();
  
    if (paddlePlayer.isUp) {
    paddlePlayer.up();
  } else if (paddlePlayer.isDown) {
    paddlePlayer.down();
    
  }
  processAi();
  
  ball.update(scorePlayer,scoreAi);
  ball.display();
  
  //ball.hitPlayer(paddlePlayer);
  //ball.hitAi(paddleAi);
  
  stroke(0);
  line(width/2, 0, width/2, height);
  
  //scorePlayer.display();
  //scoreAi.display();

     ball.update(); // call the update function within ball
    ball.display();
  
}
function processAi(){
  let middlePaddle = paddleAi.y +paddleAi.height/2;
  if (middlePaddle >ball.y){
    paddleAi.isUp=true;
    paddleAi.isDown=false;
  }else{
    paddleAi.isDown=true;
    paddleAi.isUp = false;
    
  }
}
function keyPressed(){
  if (keyCode == UP_ARROW) {
    paddlePlayer.isUp= true;
}else if (keyCode == DOWN_ARROW) {
        paddlePlayer.isDown = true;
    }
}
function keyReleased() {
    if (keyCode == UP_ARROW) {
        paddlePlayer.isUp = false;
    } else if (keyCode == DOWN_ARROW) {
        paddlePlayer.isDown = false;
    }
}
