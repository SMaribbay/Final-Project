let paddlePlayer;
let paddleAi;
 
function setup() {
  createCanvas(634, 350);
  paddlePlayer = new Paddle(26);
  paddleAi = new Paddle (width-48);
}
 
function draw() {
  
  background(200);
  paddlePlayer.display();
  paddleAi.display();
  if (paddlePlayer.isUp) {
    paddlePlayer.up();
  } else if (paddlePlayer.isDown) {
    paddlePlayer.down();
  }
     
  //paddlePlayer.up();
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
