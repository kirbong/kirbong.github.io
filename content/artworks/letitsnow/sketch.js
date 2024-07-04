let lines = [];
let linesAmount;
let x;
let y;

function addAll(arr, list) {
  for (let l of arr) {
    list.push(l);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  generateSnowflakes();
}

function draw() {
  background(8, 24, 102);
  translate(0, 100);

  stroke(255);

  let remainingLines = [];

  for (let l of lines) {
    l.show();

    if (l.b.y <= windowHeight) {
      remainingLines.push(l);
    }
  }

  lines = remainingLines;

  if (lines.length === 0) {
    generateSnowflakes();
  }
}

function generateSnowflakes() {
  lines = [];

  for (let i = 0; i < 20; i++) {
    x = random(0, windowWidth);
    y = random(-windowHeight, 0);

    let a = createVector(x + 0, y + 25);
    let b = createVector(x + 75, y + 25);
    let lineOne = new Line(a, b);
    let len = p5.Vector.dist(a, b);
    let h = (len * sqrt(3)) / 2;
    let c = createVector(x + 40, y + 15 + h);
    let lineTwo = new Line(b, c);
    let lineThree = new Line(c, a);

    lines.push(lineOne);
    lines.push(lineTwo);
    lines.push(lineThree);
  }

  linesAmount = random(1, 3);

  for (let i = 0; i < linesAmount; i++) {
    let generation = [];

    for (let l of lines) {
      let children = l.generate();
      addAll(children, generation);
    }

    lines = generation;
  }
}
