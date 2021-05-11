let MENU = 0;
var paddlePlayer,
    paddleAi,
    ball;
var paddle;
var computer;
var score;

function rand(a, b) {
    return (a + Math.random() * (b - a));
}
function setup() {
  createCanvas(634, 350);
}

function draw() {
  background(200);
  fill('#C15CD8');
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
  
  
  
  
}
function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 150 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        MENU = 1
      }
    }
  }
 
}