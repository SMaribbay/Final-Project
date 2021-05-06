let MENU = 0
let paddlePlayer;
let paddlePlayer2;
let paddleAi;
let ball;
let ball2;
let scorePlayer;
let scoreAi;

function setup() {
  createCanvas(634, 350);
   ball = new Ball();
  ball2 = new Ball();
  paddlePlayer = new Paddle(26);
  paddlePlayer2 = new Paddle (26)
  paddleAi = new Paddle (width-48);
  scorePlayer = new Score(width/2-40);
  scoreAi = new Score(width/2+40);
}
 
function draw() {
  background(200);
  /*fill('#C15CD8');
   rect(50, 50, 150, 50);
   fill('#365DC6');
  rect(50, 150, 150, 50);
  fill('#9B2424');
  rect(50, 250, 150, 50);
  textSize(20)
  fill(255);
  text('1-Player mode', 60, 85)
  text('2-player mode',60, 185)
  textSize(18);
  text('INSTRUCTIONS', 57, 285);
  textSize(40);
  text('PONG', 297, 60);
  
  if (MENU == 1) {
    background(200)
    
    paddlePlayer.display();
  paddleAi.display();
  
  paddlePlayer.update();
  paddleAi.update();
  
    if (paddlePlayer.isUp) {
    paddlePlayer.up();
  } else if (paddlePlayer.isDown) {
    paddlePlayer.down();
    
  }
    if(keyIsDown(UP_ARROW)){
    paddlePlayer.isUp-=10;
    }else if (keyIsDown(DOWN_ARROW)){
       paddlePlayer.isDown-=10;
    }
    
    
  processAi();
  
  ball.update(scorePlayer,scoreAi);
  ball.display();
  ball2.update(scorePlayer, scoreAi);
  ball2.display();
  
  ball.hitPlayer(paddlePlayer);
  ball.hitPlayer(paddlePlayer2);
  ball.hitAi(paddleAi);
   //ball2.hitPlayer(paddlePlayer);
  //ball2.hitPlayer(paddlePlayer2);
  //ball2.hitAi(paddleAi);
  
  stroke(0);
  line(width/2, 0, width/2, height);
  
  scorePlayer.display();
  scoreAi.display();
   textSize(15);
    text('Right Click to return to MENU', 500, 30)
    if (mouseButton == RIGHT) {
      MENU = 0
    }
  }*/
  
  paddlePlayer.display();
  paddleAi.display();
  
  paddlePlayer2.display();
  paddleAi.display();
  
  paddlePlayer.update();
  paddleAi.update();
  
  paddlePlayer2.update();
  paddleAi.update();
  
    if (paddlePlayer.isUp) {
    paddlePlayer.up();
  } else if (paddlePlayer.isDown) {
    paddlePlayer.down();
    
  }
  if(paddlePlayer2.isUp){
    paddlePlayer2.up();
    }else if (paddlePlayer2.isDown){
      paddlePlayer2.down();
    }
  processAi();
  
  ball.update(scorePlayer,scoreAi);
  ball.display();
  ball2.update(scorePlayer, scoreAi);
  ball2.display();
  
  ball.hitPlayer(paddlePlayer);
  ball.hitPlayer(paddlePlayer2);
  ball.hitAi(paddleAi);
   ball2.hitPlayer(paddlePlayer);
  ball2.hitPlayer(paddlePlayer2);
  ball2.hitAi(paddleAi);
  
  stroke(0);
  line(width/2, 0, width/2, height);
  
  scorePlayer.display();
  scoreAi.display();

     //ball.update(); // call the update function within ball
    //ball.display();
  
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
  if (keyCode === UP_ARROW) {
    paddlePlayer.isUp-= 100;
}else if (keyCode === DOWN_ARROW) {
        paddlePlayer.isDown = true;
    }
   if(key == "w"){
    paddlePlayer2.isUp= true; 
   } else if(key=="s"){
     paddlePlayer2.isDown = true;
   }
}
function keyReleased() {
    if (keyCode == UP_ARROW) {
        paddlePlayer.isUp = false;
    } else if (keyCode == DOWN_ARROW) {
        paddlePlayer.isDown = false;
    }
   if(key == "w"){
    paddlePlayer2.isUp= false; 
   } else if( key=="s"){
     paddlePlayer2.isDown = false;
   }
}

/*function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 150 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        MENU = 1
      }
    }
  }
 
}
*/