//Sprites and background variables (keep all)
let MENU = 0
var paddlePlayer,
  paddleAi,
    ball,
    ball2,
    rectangle;
var paddle;
var computer;
var scores;

const canvasDimensions = [634, 350];


function rand(a, b) {
    return (a + Math.random() * (b - a));
}

function setup() {
    createCanvas(634,350);
    background(200);

    fill(255);
    textAlign(CENTER);

    paddle = new Group();

    paddlePlayer = createSprite(20, height / 2, 20, 80);
    paddlePlayer.shapeColor = 'purple';
    paddle.add(paddlePlayer);

    paddleAi = createSprite(width - 20, height / 2, 20, 80);
    paddleAi.shapeColor = 'purple';
    paddle.add(paddleAi);

    ball = createSprite(width / 2, height / 2, 20, 20);
    ball.shapeColor = 'black';
  ball2= createSprite(width / 2, height / 2, 20, 20);
    ball2.shapeColor = 'black';
  rectangle = createSprite(width/2, height/2, 80,20);
  rectangle.shapeColor = 'indigo';
  rectangle2 = createSprite(width/2, height/2, 20,80);
  rectangle2.shapeColor = 'pink';

    computer = Array.apply(null, Array(15)).map(Number.prototype.valueOf, height / 2);
    score = [0,0];
 
    ball.setSpeed(2, rand(-90, 70));
  ball2.setSpeed(2, rand(-90, 70));
  rectangle.setSpeed(2.2,rand(-90,70));
  rectangle2.setSpeed(2.3,rand(-90,70));
}

function draw() {
    background(200);
    fill('#C15CD8');
   rect(50, 50, 150, 50);
   fill('#365DC6');
  rect(50, 150, 150, 50);
  textSize(20)
  fill(255);
  text('1-ball mode', 120, 85)
  text('2-ball mode',120, 185)

  textSize(40);
  text('PONG', 297, 60);
  
  if (MENU == 1) {
    background(200);
     textSize(30);
     fill('purple');
    text('Ball Shape', width/2, 30);
   fill('#365DC6');
  rect(50, 150, 150, 50);
  fill('#9B2424');
  rect(50, 250, 150, 50);
  textSize(20)
  fill(255);
  text('Square',120, 185)
  textSize(18);
  text('Rectangle', 124, 285);
     textSize(18)
    text('Right Click to return to MENU', 500, 50)
     if (mouseButton == RIGHT) {
      MENU = 0
    }
   }
  if (MENU==2){
    background(200);
      drawSprites();
stroke(0);
  line(width/2, 0, width/2, height);
    // set play paddle position to mouse position, within bounds
    paddlePlayer.position.y = Math.max(0, Math.min(height, mouseY));

    // perfect computer player
   // computer.position.y = ball.position.y;

    //  computer player
    computer.push(ball.position.y);
     computer.push(ball2.position.y);
    paddleAi.position.y = computer.shift();

    // wall collisions
    if (ball.position.y < 4 || ball.position.y > height - 4) {
        ball.velocity.y *= -1;
    }
     if (ball2.position.y < 4 || ball2.position.y > height - 4) {
        ball2.velocity.y *= -1;
    }
  //paddle collisions
 ball.overlap(paddle, function(ball, pad) {
        ball.velocity.x *= -1.25;
        ball.velocity.y += (ball.position.y - pad.position.y) / 20;
    });
    ball2.overlap(paddle, function(ball2, pad) {
        ball2.velocity.x *= -1.25;
        ball2.velocity.y += (ball2.position.y - pad.position.y) / 20;
    });
    // goal collisions
    if (ball.position.x < 4) {
        score[1]++;
        ball.position.x = width/2;
        ball.position.y = height/2;
        ball.setSpeed(3, rand(70,190));
    }
    else if (ball.position.x > width - 4) {
        score[0]++;
        ball.position.x = width/2;
        ball.position.y = height/2;
        ball.setSpeed(3, rand(-10,10));
    }
if (ball2.position.x < 4) {
        score[1]++;
        ball2.position.x = width/2;
        ball2.position.y = height/2;
        ball2.setSpeed(3, rand(70,190));
    }
    else if (ball2.position.x > width - 4) {
        score[0]++;
        ball2.position.x = width/2;
        ball2.position.y = height/2;
        ball2.setSpeed(3, rand(-10,10));
    }

  

    scores = score[0] + " – " + score[1];
  textSize(30);
     text(scores,width/2, 40);
    textSize(18)
    text('Right Click to return to MENU', 500, 30)
   if (mouseButton == RIGHT) {
      MENU = 0
    }
   
    
  }
  if(MENU == 4){
    background(200);
   drawSprites();
stroke(0);
  line(width/2, 0, width/2, height);
    // set play paddle position to mouse position, within bounds
    paddlePlayer.position.y = Math.max(0, Math.min(height, mouseY));

    // perfect computer player
   // computer.position.y = ball.position.y;

    //  computer player
    computer.push(ball.position.y);
    paddleAi.position.y = computer.shift();

    // wall collisions
    if (ball.position.y < 4 || ball.position.y > height - 4) {
        ball.velocity.y *= -1;
    }
  //paddle collisions
 ball.overlap(paddle, function(ball, pad) {
        ball.velocity.x *= -1.25;
        ball.velocity.y += (ball.position.y - pad.position.y) / 20;
    });
    // goal collisions
    if (ball.position.x < 4) {
        score[1]++;
        ball.position.x = width/2;
        ball.position.y = height/2;
        ball.setSpeed(3, rand(70,190));
    }
    else if (ball.position.x > width - 4) {
        score[0]++;
        ball.position.x = width/2;
        ball.position.y = height/2;
        ball.setSpeed(3, rand(-10,10));
    }

  

    scores = score[0] + " – " + score[1];
  textSize(30);
     text(scores,width/2, 40);
    textSize(18)
    text('Right Click to return to MENU', 500, 30)
   if (mouseButton == RIGHT) {
      MENU = 0
    }
     
  }
  if (MENU == 5) {
    background(200);
   drawSprites();
stroke(0);
  line(width/2, 0, width/2, height);
    // set play paddle position to mouse position, within bounds
    paddlePlayer.position.y = Math.max(0, Math.min(height, mouseY));

    // perfect computer player
   // computer.position.y = ball.position.y;

    //  computer player
    computer.push(rectangle.position.y);
    paddleAi.position.y = computer.shift();

    // wall collisions
    if (rectangle.position.y < 4 || rectangle.position.y > height - 4) {
        rectangle.velocity.y *= -1;
    }
  //paddle collisions
 rectangle.overlap(paddle, function(rectangle, pad) {
        rectangle.velocity.x *= -1.25;
        rectangle.velocity.y += (rectangle.position.y - pad.position.y) / 20;
    });
    // goal collisions
    if (rectangle.position.x < 4) {
        score[1]++;
        rectangle.position.x = width/2;
        rectangle.position.y = height/2;
        rectangle.setSpeed(3, rand(70,190));
    }
    else if (rectangle.position.x > width - 4) {
        score[0]++;
        rectangle.position.x = width/2;
        rectangle.position.y = height/2;
        rectangle.setSpeed(3, rand(-10,10));
    }

  

    scores = score[0] + " – " + score[1];
  textSize(30);
     text(scores,width/2, 40);
    textSize(18)
    text('Right Click to return to MENU', 500, 30)
   if (mouseButton == RIGHT) {
      MENU = 0
    }
}
} 
function mouseClicked() {
  if (MENU == 0) {
    if (mouseX < 150 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        MENU = 1
      }
      if (mouseY < 225 && mouseY > 150) {
        MENU = 2
    }
  }
    }
  if(MENU==1){
     if (mouseX < 150 && mouseX > 50){
      
          if (mouseY < 225 && mouseY > 150) {
        MENU = 4;
    }
       if (mouseY<325 && mouseY>250){
         MENU = 5;
       }
     }
    
  }
 

}
