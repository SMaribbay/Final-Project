class Score{
  
  constructor(x){
    this.x = x;
    this.score = 0;
  }
  display(){
    textSize(60);
    textAlign(CENTER);
    text(this.score,this.x,70);
  }
    increment(){
      this.score++
    }
  }
  

