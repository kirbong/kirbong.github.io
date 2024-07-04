let grassY;
let grassW;
let grassH;

let bladeW;
let bladeH;
let bladeStart;
let bladeStop;

var blade = [];
var cloud = [];
var bladeDirection;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noCursor();

	grassW = width;
	grassH = height / 2.5;
	grassY = height - grassH;

	bladeW = 70;
	bladeH = 200;
	bladeStart = PI;
	bladeStop = PI + QUARTER_PI;
	bladeDirection = false;

	for (var i = 0; i < 1000; i++) {
		blade[i] = new Blades();
	}

	for (var j = 0; j < 7; j++) {
		cloud[j] = new Clouds();
	}
}

function draw() {
	background("deepskyblue");

	Sun();

	for (var i = 0; i < 7; i++) {
		cloud[i].animate();
		cloud[i].cloud();
	}

	Grass();

	for (var j = 0; j < 1000; j++) {
		blade[j].animate();
		blade[j].blade();
	}
}

function Grass() {
	fill("green");
	noStroke();
	rect(0, grassY, grassW, grassH);
}

function Sun() {
	fill("yellow");
	noStroke();
	circle(width - 150, 100, 150);
}

function Blades() {
	this.x = random(grassW + 50);
	this.y = random(height / 1.55, height);

	this.blade = function () {
		noFill();
		stroke("forestgreen");
		strokeWeight(4);
		arc(this.x, this.y, bladeW, bladeH, bladeStart, bladeStop);
	};

	this.animate = function () {
		if (bladeH >= 300) {
			bladeDirection = true;
		} else if (bladeH <= 100) {
			bladeDirection = false;
		}

		if (bladeDirection == false) {
			bladeH = bladeH + 0.5;
		} else if (bladeDirection == true) {
			bladeH = bladeH - 0.5;
		}
	};
}

function Clouds() {
	this.x = random(width);
	this.y = random(grassH);

	this.cloud = function () {
		fill(250);
		noStroke();
		ellipse(this.x, this.y, 70, 50);
		ellipse(this.x + 10, this.y + 10, 70, 50);
		ellipse(this.x - 20, this.y + 10, 70, 50);
	};

	this.animate = function () {
		this.x = this.x + 5;

		if (this.x > width) {
			this.x = 0;
		}
	};
}
