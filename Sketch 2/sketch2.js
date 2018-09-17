
//Source: https://p5js.org/examples/objects-array-of-objects.html

var balls = []; // array of ball objects
var value = false;
var locked = false;

function setup() {
  createCanvas(720, 400);


  // Create objects
  for (var i=0; i<100; i++) { //animation best with 100 balls
    balls.push(new ball());
  }
}

function draw() {
  background(0,255,255);
  noStroke();
  for (var i=0; i<balls.length; i++) {
    balls[i].movement();
    balls[i].display();
    balls[i].border();
    balls[i].mouseD();
  }
}


// ball class
function ball() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.xspeed = random(-.1,1);
  this.yspeed = random(-.1,1);

  // this.x = width/2;
  // this.y = height/2;
  // this.diameter = 30;
  // this.xspeed = 0;
  // this.yspeed = 0;


  this.movement = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };

  this.border = function(){
      if (this.x > 720 || this.x <0 ){
        this.xspeed = this.xspeed * -1
      }
      if (this.y > 400 || this.y <0 ){
      this.yspeed = this.yspeed * -1
      }
  }

  this.mouseD = function(){
      if(mouseX > this.x-this.diameter && mouseX < this.x+this.diameter &&
         mouseY > this.y-this.diameter && mouseY < this.y+this.diameter){
          value = true;
        if(!locked){
            fill(255);
           // console.log('test');
         }
        }else{
          noFill();
          value = false;
        }
      }
}