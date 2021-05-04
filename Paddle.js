class Paddle {
 
    constructor(x) {
        this.x = x;
        this.y = height / 2;  window
        this.height = 80;
        this.width = 20;
      this.isUp = false;
        this.isDown = false;
    }
     
     
    display() {
        fill('#6A2AE5');
        rect(this.x, this.y, 20, 80);
    }
 up() {
   if (this.y > 0) {
        this.y -= 2;
    }
 }
    down() {
      if (this.y < height - this.height) {
        this.y += 2;
    }

}
}