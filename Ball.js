class Ball{
 
 
    constructor() {
        this.r = 10;
        this.reset();
    }
     
     
    update() {
        // change direction if it hits the top or bottom 
        if (this.y < this.r || this.y > height - this.r) {
            this.ySpeed = -this.ySpeed;
        } 
        // restart the game if it goes to the end of the sreen 
        if (this.x<this.r){      
          aiScore.increment();
          this.reset();
        } else if (this.x>width+this.r){
          playerScore.increment();
          this.reset();
        }
         
        this.x += this.xSpeed;
        this.y += this.ySpeed;
     
    }
     
    reset() {
        this.x = width/2;
        this.y = height/2;
         
        this.xSpeed = random(3, 4);
         
        let isLeft = random(1) > .5;
        if (isLeft) {
            this.xSpeed = -this.xSpeed;
        } 
         
        this.ySpeed = random(-3, 3);
    }
     
    display() {
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
     
     
}