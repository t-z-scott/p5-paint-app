let red;
let blue;
let green;

function setup() {
	createCanvas(600, 400);
	background(230);
	red = 0;
	blue = 0;
	green = 0;
}

function draw() {
	noStroke();
	
	// palette
	fill(255,0,0);		//red
	square(1, 0, 25);

	fill(255,125,0);	//orange
	square(1, 26, 25);
	
	fill(255,255,0);	//yellow
	square(1, 53, 25);
	
	fill(0,255,0);		//green
	square(1, 80, 25);
	
	fill(0,255,255);	//cyan
	square(1, 107, 25);
	
	fill(0,0,255);		//blue
	square(1, 133, 25);
	
	fill(255,0,255);	//magneta
	square(1, 159, 25);
	
	fill(150,75,0);		//brown
	square(1, 185, 25);
	
	fill(255);			//white
	square(1, 211, 25);
	
	fill(0);			//black
	square(1, 237, 25);
}

function mouseDragged() {
	strokeWeight(10);
	stroke(red, green, blue);
	if (mouseX >= 26)
		line(mouseX, mouseY, pmouseX, pmouseY);
}

// set color through palette
function mousePressed() {
	if (mouseX <= 26) {
		if (mouseY <= 25) {							//red
			red = 255;
			green = 0;
			blue = 0;
		}
		if (mouseY <= 52 && mouseY >= 26) {			//orange
			red = 255;
			green = 125;
			blue = 0;
		}
		if (mouseY <= 79 && mouseY >= 53) {			//yellow
			red = 255;
			green = 255;
			blue = 0;
		}
		if (mouseY <= 106 && mouseY >= 80) {		//green
			red = 0;
			green = 255;
			blue = 0;
		}
		if (mouseY <= 132 && mouseY >= 107) {		//cyan
			red = 0;
			green = 255;
			blue = 255;
		}
		if (mouseY <= 158 && mouseY >= 133) {		//blue
			red = 0;
			green = 0;
			blue = 255;
		}
		if (mouseY <= 184 && mouseY >= 159) {		//magenta
			red = 255;
			green = 0;
			blue = 255;
		}
		if (mouseY <= 210 && mouseY >= 185) {		//brown
			red = 150;
			green = 75;
			blue = 0;
		}
		if (mouseY <= 236 && mouseY >= 211) {		//white
			red = 255;
			green = 255;
			blue = 255;
		}
		else if (mouseY <= 263 && mouseY >= 237) {	//black
			red = 0;
			blue = 0;
			green = 0;
		}
	}
}