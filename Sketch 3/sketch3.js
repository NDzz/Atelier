//Source: https://p5js.org/reference/#/p5/pmouseX
var x = 1;
var y = 1;
var easing = 0.07;
var state = true;


function setup() {
	// frameRate(15);
	createCanvas(720,500);
}

function draw() {
	background(100);


	var targetX = mouseX;
	var dx = targetX - x;
	x += dx *easing;

	var targetY = mouseY;
	var dy = targetY - y;
	y += dy *easing;


	strokeWeight(2)
	ellipse(x,y,50);
	line(mouseX, mouseY, pmouseX, pmouseY);


	///mouse
	if(mouseIsPressed){
		stroke(255);
	}else{stroke(0);}

	if(mouseX > x-50/2 && mouseX < x+50/2 &&
		mouseY > y-50/2 && mouseY < y+50/2){
			fill(random(255),random(255),random(255));
			console.log("test");
	}else{
		noFill();
	}
}