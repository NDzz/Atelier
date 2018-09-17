var x = 1;
var y = 1;
var easing = 0.05;
var state = true;
var mic;


function setup() {
  createCanvas(720,500);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
var vol = mic.getLevel();
// console.log(vol);

  var targetX = mouseX;
  var dx = targetX - x;
  x += dx *easing;

  var targetY = mouseY;
  var dy = targetY - y;
  y += dy *easing;

  strokeWeight(2)
  ellipse(x-25,y-5,30);
  ellipse(x+25,y-5,30);

  ///mouse
  if(mouseIsPressed){
    noStroke();
    frameRate(20);
  }else{
    background(255,50);
    stroke(0);
    frameRate(100);
  }

  if(vol > 0.070){
    smile2();
    fill(random(255),random(255),random(255));
    }else{
      smile();
    }
  }

function ellipse(){
    this.ellipse(x,y+30, 60, vol*300)
    this.noFill();
}

function smile(){
  this.noFill();
  this.arc(x, y+20, 60, 55, 0, PI);

}

function smile2(){
  this.noFill();
  this.arc(x, y+20, 60, 35, 0, PI);

}