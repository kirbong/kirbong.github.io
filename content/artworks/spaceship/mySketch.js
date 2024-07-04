var star = [];
var cloud = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noCursor();
	//background(27, 5, 61);
	
	for (var i = 0; i < 50; i++)
  {
    star[i] = new Stars();
  }
	
	for (var j = 0; j < 3; j++)
  {
    cloud[j] = new Clouds();
  }
}

function draw() {	
	background(27, 5, 61);
	
	for (var i = 0; i < 50; i++)
  {
    star[i].animate();
    star[i].star();
  }
	
	for (var j = 0; j < 3; j++)
  {
    cloud[j].animate();
    cloud[j].cloud();
  }
	
	Rocket();
}

function Stars() {
	this.x = random(windowWidth);
	this.y = random(windowHeight);
	this.size = random(3,6)
	
	this.star = function() {
		fill(255, 255, 255);
		noStroke();
		circle(this.x, this.y, this.size);
	}
	
	this.animate = function() {
		this.x = this.x - random(5, 20);
	
		if (this.x < 0) {
    		this.x = windowWidth;
  	}
	}
}

function Rocket() {
	fill(255, 0, 0);
	triangle(mouseX - 25, mouseY, mouseX - 50, mouseY - 15, mouseX - 50, mouseY + 15);
	
	fill(255, 255, 255);
	noStroke();
	ellipse(mouseX, mouseY, 75, 30);
	
	fill(60, 60, 60);
	noStroke();
	ellipse(mouseX + 15, mouseY, 15, 15);
	
	stroke(255, 111, 0);
	line(mouseX - 55, mouseY, mouseX - 100, mouseY)
	line(mouseX - 55, mouseY, mouseX - 100, mouseY + 10)
	line(mouseX - 55, mouseY, mouseX - 100, mouseY - 10)
}

function Clouds() {
	this.x = random(windowWidth);
	this.y = random(windowHeight);
	
	this.cloud = function() {
		fill(250);
  	noStroke();
  	ellipse(this.x, this.y, 70, 50);
  	ellipse(this.x + 10, this.y + 10, 70, 50);
  	ellipse(this.x - 20, this.y + 10, 70, 50);
	}
	
	this.animate = function() {
		this.x = this.x - 5;
	}
}

