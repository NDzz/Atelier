//souce: https://p5js.org/reference/#/p5/keyTyped

var ball = {
  x: 100, 
  y: 480/2, 
  xspeed: 5/2, 
  yspeed: 0,
}

var value = 0;

function setup() {
  createCanvas(720, 480);
  background(0);
}

function draw() {

  line(ball.x+10, ball.y, ball.x+10, ball.y);
  line(ball.x+10, ball.y+125, ball.x+10, ball.y+125);
  line(ball.x+10, ball.y-125, ball.x+10, ball.y-125);

  textSize(32);
  fill(255); //color for letters
  movement();
  border();

//reset canvas
  if (mouseIsPressed) {
    background(155);
  }
  else {
    background(200,5);
  }  

}

  function keyTyped(){
    if (key ==='a'){
      text('A', ball.x, ball.y);
      text('A', ball.x, ball.y + 125);
      text('A', ball.x, ball.y - 125);

    }else 
    if (key ==='b'){
      text('B', ball.x, ball.y);
      text('B', ball.x, ball.y + 125);
      text('B', ball.x, ball.y - 125);
    }else 
    if (key ==='c'){
      text('C', ball.x, ball.y);
      text('C', ball.x, ball.y + 125);
      text('C', ball.x, ball.y - 125);
    }else 
    if (key ==='d'){
      text('D', ball.x, ball.y);
      text('D', ball.x, ball.y + 125);
      text('D', ball.x, ball.y - 125);
    }else 
    if (key ==='e'){
      text('E', ball.x, ball.y);
      text('E', ball.x, ball.y + 125);
      text('E', ball.x, ball.y - 125);
    }else 
    if (key ==='f'){
      text('F', ball.x, ball.y);
      text('F', ball.x, ball.y + 125);
      text('F', ball.x, ball.y - 125);
    }else 
    if (key ==='g'){
      text('G', ball.x, ball.y);
      text('G', ball.x, ball.y + 125);
      text('G', ball.x, ball.y - 125);
    }else 
    if (key ==='h'){
      text('H', ball.x, ball.y);
      text('H', ball.x, ball.y + 125);
      text('H', ball.x, ball.y - 125);
    }else 
    if (key ==='i'){
      text('I', ball.x, ball.y);
      text('I', ball.x, ball.y + 125);
      text('I', ball.x, ball.y - 125);
    }else 
    if (key ==='j'){
      text('J', ball.x, ball.y);
      text('J', ball.x, ball.y + 125);
      text('J', ball.x, ball.y - 125);
    }else 
    if (key ==='k'){
      text('K', ball.x, ball.y);
      text('K', ball.x, ball.y + 125);
      text('K', ball.x, ball.y - 125);
    }else 
    if (key ==='l'){
      text('L', ball.x, ball.y);
      text('L', ball.x, ball.y + 125);
      text('L', ball.x, ball.y - 125);
    }else 
    if (key ==='m'){
      text('M', ball.x, ball.y);
      text('M', ball.x, ball.y + 125);
      text('M', ball.x, ball.y - 125);
    }else 
    if (key ==='n'){
      text('N', ball.x, ball.y);
      text('N', ball.x, ball.y + 125);
      text('N', ball.x, ball.y - 125);
    }else 
    if (key ==='o'){
      text('O', ball.x, ball.y);
      text('O', ball.x, ball.y + 125);
      text('O', ball.x, ball.y - 125);
    }else 
    if (key ==='p'){
      text('P', ball.x, ball.y);
      text('P', ball.x, ball.y + 125);
      text('P', ball.x, ball.y - 125);
    }else 
    if (key ==='q'){
      text('Q', ball.x, ball.y);
      text('Q', ball.x, ball.y + 125);
      text('Q', ball.x, ball.y - 125);
    }else 
    if (key ==='r'){
      text('R', ball.x, ball.y);
      text('R', ball.x, ball.y + 125);
      text('R', ball.x, ball.y - 125);
    }else 
    if (key ==='s'){
      text('S', ball.x, ball.y);
      text('S', ball.x, ball.y + 125);
      text('S', ball.x, ball.y - 125);
    }else 
    if (key ==='t'){
      text('T', ball.x, ball.y);
      text('T', ball.x, ball.y + 125);
      text('T', ball.x, ball.y - 125);
    }else 
    if (key ==='u'){
      text('U', ball.x, ball.y);
      text('U', ball.x, ball.y + 125);
      text('U', ball.x, ball.y - 125);
    }else 
    if (key ==='v'){
      text('V', ball.x, ball.y);
      text('V', ball.x, ball.y + 125);
      text('V', ball.x, ball.y - 125);
    }else 
    if (key ==='w'){
      text('W', ball.x, ball.y);
      text('W', ball.x, ball.y + 125);
      text('W', ball.x, ball.y - 125);
    }else 
    if (key ==='x'){
      text('X', ball.x, ball.y);
      text('X', ball.x, ball.y + 125);
      text('X', ball.x, ball.y - 125);
    }else 
    if (key ==='y'){
      text('Y', ball.x, ball.y);
      text('Y', ball.x, ball.y + 125);
      text('Y', ball.x, ball.y - 125);
    }else 
    if (key ==='z'){
      text('Z', ball.x, ball.y);
      text('Z', ball.x, ball.y + 125);
      text('Z', ball.x, ball.y - 125);
    }
}


///////////////
function border() {
  if(ball.x > 720){ball.x = 0}
  if(ball.x < 0){ball.x = 720}
  if(ball.y > 480){ball.y = 0}
  if(ball.y < 0){ball.y = 480}
}

function movement() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}





