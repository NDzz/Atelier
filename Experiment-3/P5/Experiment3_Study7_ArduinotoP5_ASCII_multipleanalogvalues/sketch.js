// Daniel Shiffman
// code for https://youtu.be/vqE8DMfOajk

var video;
var vScale = 5;
var particles = [];

var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1411';  // fill in your serial
var inData;                             // for incoming serial
var sensor1;
var sensor2;
var sensor3;
var mappedSensor1;
var mappedSensor2;
var mappedSensor3;


function setup() {

  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  
  for (var i = 0; i < 1000000; i++) { //Replace "700" with sensor val
    particles[i] = new Particle(random(width-50), random(height-50));
  }

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
  serial.list(); // list the serial ports
  serial.open(portName);               // open a serial port
}

function draw() {
  // console.log(mappedSensor1);
  // console.log(mappedSensor2);
  // console.log(mappedSensor3);
  background(255);
  video.loadPixels();

  for(var i = 0; i < mappedSensor3; i++) {
    particles[i].update();
    particles[i].show();
  }
}

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.xspeed = random(-1,1);
  this.yspeed = random(-1,1);
  this.r = random(5,15); //Replace "20" with a sensor val
  
  this.update = function() {
    // //movement
    // this.x += this.xspeed;
    // this.y += this.yspeed;

    // //border
    // if(this.x +this.r > canvas.width || this.x <0){
    //   this.xspeed = this.xspeed *-1
    // }
    // if(this.y +this.r> canvas.height || this.y<0){
    //   this.yspeed = this.yspeed *-1
    //   // console.log("hi")
    // }

    //dont know what this does
    this.x = constrain(this.x, 0, width);    
    this.y = constrain(this.y, 0, height);  
  }

  this.show = function() {
    // noStroke();
    var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);
    var col = video.get(px, py);

    fill(col[0], col[1], col[2],255);
    stroke(0,0,0,mappedSensor21)

    rect(this.x,this.y,this.r+mappedSensor1,this.r+mappedSensor1)
  }
}



//arduino stuff
function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  var inString = serial.readStringUntil('\r\n');
 
  //check to see that there's actually a string there:
  if (inString.length > 0 ) {
    var sensors = split(inString, ',');            // split the string on the commas
    if (sensors.length > 2) {                      // if there are three elements
      sensor1 = sensors[0];  
      sensor2 = sensors[1]; 
      sensor3 = sensors[2];
      mappedSensor1 = map(sensor1, 35, 50, 10, 30);//size of rect
      mappedSensor2 = map(sensor2, 50, 80, 255, 50);//color
      mappedSensor21 = map(sensor2, 50, 70, 255, 0);//stroke effect
      console.log(mappedSensor3)
      mappedSensor3 = map(sensor3, 50, 80, 50, 600);//amount of rect
    }
  }
}
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}


// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 console.log(i + " " + portList[i]);
 }
}

