var mark = {
	x:0,
	y:0,
	xspeed:1,
	yspeed:1,
}

function setup (){
	createCanvas(1000, 700);
	background(255)
}

function draw (){
	fill(0);
	noStroke();

//to draw OCAD logo with "mark"
	ellipse(mark.x+350, 100, 5.5); //top line			1
	ellipse(mark.x+270, 200, 5.5); //mid line			2
	ellipse(mark.x+270, 280, 5.5); //1 below mid line	3
	ellipse(mark.x+350, 340, 5.5);// bottom line		4

	ellipse(270, mark.y+200, 5.5); //left line			1
	ellipse(350, mark.y+100, 5.5); //left mid line		2
	ellipse(410, mark.y+280, 5.5); //bottom mid line	3
	ellipse(530, mark.y+100, 5.5);// right line			4
	movement();

//boxes to stop mark - For logo
	fill(255,255,255);//change color fill to reveal boxes

	rect(353,105,174,170);//middle box
	rect(533,95,600,700);//right box
	rect(265,283,10,500);//middle box
	rect(413,283,500,500);//middle box
	rect(345,343,500,500);//middle box

//Text
	fill(0);
	textStyle(BOLD);
	textSize(17);
	text('OCAD', 370, 130);

	textSize(22);
	text('University', 370, 155);

//make OCAD text appear
// fill(0)
// rect(mark.x+355,110, 200,100);

}

function movement(){
	mark.x = mark.x + mark.xspeed;
	mark.y = mark.y + mark.yspeed;
}
