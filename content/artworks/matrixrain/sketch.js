let matrix = [];

const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var char1;
var char2;
var char3;
var char4;
var char5;
var char6;
var char7;

var r;
var g;
var b;

let matrixLines = 150;
let matrixSpeed = 3;

function setup() 
{
	createCanvas(windowWidth, windowHeight);

	for(let i = 0; i < matrixLines; i++)
	{
		matrix[i]=  new Matrix();
	}

	char1 = int(random(0, characters.length));
	char2 = int(random(0, characters.length));
	char3 = int(random(0, characters.length));
	char4 = int(random(0, characters.length));
	char5 = int(random(0, characters.length));
	char6 = int(random(0, characters.length));
	char7 = int(random(0, characters.length));

	r = random(1, 153);
	g = random(102, 255);
	b = random(0, 204);
}

function draw()
{
	background('black');

	for(let i = 0; i < matrixLines; i++)
	{
		matrix[i].rain();
		matrix[i].animate();
	}
}

function Matrix()
{
	this.x = random(width);
	this.y = random(height);

	this.rain = function()
	{
		text(characters[char1], this.x, this.y);
		text(characters[char2], this.x, this.y + 10);
		text(characters[char3], this.x, this.y + 25);
		text(characters[char4], this.x, this.y + 35);
		text(characters[char5], this.x, this.y + 50);
		text(characters[char6], this.x, this.y + 60);
		text(characters[char7], this.x, this.y + 75);
		fill(r, g, b);
	}

	this.animate = function()
	{
		this.y = this.y + matrixSpeed;

		if(this.y >= height)
		{
			this.y = 0;
		}
	}
}
