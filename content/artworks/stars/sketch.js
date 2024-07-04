let stars = [];
let starNum = 50;
let starSpeed = 10;

function setup() 
{
	createCanvas(windowWidth, windowHeight);

	for(let i = 0; i < starNum; i++)
	{
		stars[i] = new Stars();
	}
}

function draw()
{
	background(27, 5, 61);

	for(let i = 0; i < starNum; i++)
	{
		stars[i].animate();
		stars[i].star();
	}
}

function Stars()
{
	this.x = random(width);
	this.y = random(height);
	this.size = random(3, 6);

	this.star = function()
	{
		fill(255, 255, 255);
		noStroke();
		circle(this.x, this.y, this.size);
	}

	this.animate = function()
	{
		this.x = this.x - starSpeed;

		if(this.x < 0) 
		{
			this.x = width;
		}
	}
}
