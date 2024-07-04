var dvd;
let img;

function preload() {
	//load DVD image
	img = loadImage('DVD.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	//load DVD function
	dvd = new DVD();
}

function draw() {
	background('blue');

	// call functions
	dvd.update();
	dvd.dvd();
	dvd.points();
}

function DVD() {
	//height of image
	this.h = 120;
	// width of image
	this.w = 180;
	// speed x of image
	this.velX = 0;
	// speed y of image
	this.velY = 0;
	// gravity
	this.gravity = 0.2;
	// initial position
	this.posX = width / 2;
	// initial position
	this.posY = height / 2 - 100;
	// switch
	this.drag = false;
	// score
	this.score = 0;

	// check if mouse is hovering on image
	this.hoverDVD = function(x, y) {
		let dx = x - this.posX;
		let dy = x - this.posY;
		let dist = Math.sqrt(dx * dx, dy * dy)
		return dist <= this.w / 2;
	}

	// drag dvd image
	this.dragDVD = function() {
		this.drag = true; // switch on
		this.mousex = mouseX;
		this.mousey = mouseY;
	}

	// what happens when drag is release
	this.releaseDVD = function() {
		this.drag = false; // switch off
	}

	this.update = function() {
		//mathy math and keeping it in borders
		this.minX = 0;
		this.maxX = width - this.w / 2;
		this.minY = this.h / 2;
		this.maxY = height - this.h / 2;

		if (this.drag) {
			this.posX = Math.max(this.minX, Math.min(this.maxX, mouseX));
			this.posY = mouseY;
			this.velX = this.velX / 2 + (mouseX - this.mousex);
			this.velY = this.velY / 2 + (mouseY - this.mousey);
			this.mousex = mouseX;
			this.mousey = mouseY;
		} else {
			this.velY = this.velY + this.gravity;
			this.posY = this.posY + this.velY;

			if (this.posY >= this.maxY) {
				this.posY = this.maxY;
				this.velY *= -1;
				this.velY = this.velY * 0.9;
			}

			if (this.posY <= this.minY) {
				this.posY = this.minY;
				this.velY *= -1;
				this.velY = this.velY * 0.9;
			}

			this.posX = this.posX + this.velX;

			if (this.posX >= this.maxX) {
				this.posX = this.maxX;
				this.velX *= -1;
			}

			if (this.posX <= this.minX) {
				this.posX = this.minX;
				this.velX *= -1;
			}

			this.velX = this.velX * 0.99;
		}

		// adding dvd logo image
		this.dvd = function() {
			image(img, this.posX, this.posY);
			img.resize(this.w, this.h); // size picture
		}

		this.points = function() {
			// if the logo hits the corners, add to score
			if (this.posX >= this.maxX && this.posY >= this.maxY) {
				this.score = this.score + 1;
			}

			if (this.posX >= this.maxX && this.posY <= this.minY) {
				this.score = this.score + 1;
			}

			if (this.posX <= 0 + this.minX && this.posY >= this.maxY) {
				this.score = this.score + 1;
			}

			if (this.posX <= 0 + this.minX && this.posY <= this.minY) {
				this.score = this.score + 1;
			}

			// score text
			fill(255);
			textSize(30);
			text("Hit the corners " + this.score + " times!", 25, 50);
		}
	}
}

// drag
function mousePressed() {
	if (dvd.hoverDVD(mouseX, mouseY))
		dvd.dragDVD();
}

// do on mouse release
function mouseReleased() {
	dvd.releaseDVD();
}