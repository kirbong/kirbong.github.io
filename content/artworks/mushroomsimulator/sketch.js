let ground_level;
let mushrooms = [];
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ground_level = windowHeight - windowHeight / 10;
  mushrooms.push(new Mushroom(width / 2, ground_level));
}

function draw() {
  background(0); // Set background color to black

  for (let i = 0; i < mushrooms.length; i++) {
    let mushroom = mushrooms[i];
    mushroom.update();
    mushroom.display();
  }

  // Update and display circles
  for (let i = circles.length - 1; i >= 0; i--) {
    let circle = circles[i];
    circle.applyGravity();
    circle.update();
    circle.display();

    // Check if the circle hits the ground
    if (circle.hitsGround()) {
      let mushroom = new Mushroom(circle.position.x, ground_level);
      mushrooms.push(mushroom);
      circles.splice(i, 1);
    }
  }

  if (mushrooms.length >= 100) {
    mushrooms.splice(mushrooms.length - 25, 25);
  }
}

class Mushroom {
  constructor(x, y) {
    this.stemHeight = 10;
    this.capWidth = 10;
    this.capHeight = 10;
    this.maxHeight = 200;
    this.growthSpeed = 0.3; // Adjust the mushroom growth speed here
    this.isFullyGrown = false;
    this.stemColor = randomColor(); // Random stem color
    this.capColor = randomColor(); // Random cap color
    this.x = x;
    this.y = y;
  }

  update() {
    if (!this.isFullyGrown) {
      // Increase mushroom size gradually
      if (this.stemHeight < this.maxHeight) {
        this.stemHeight += this.growthSpeed;
        this.capWidth += this.growthSpeed;
        this.capHeight += this.growthSpeed;
      } else {
        this.isFullyGrown = true;
        this.disperseCircles();
      }
    }
  }

  disperseCircles() {
    for (let i = 0; i < 3; i++) {
      // Adjust the number of circles here
      let x = random(this.x - this.capWidth / 2, this.x + this.capWidth / 2);
      let y = this.y - this.stemHeight;
      let velocity = createVector(random(-2, 2), random(-7, -3)); // Adjust the initial velocity here
      let circle = new Circle(x, y, velocity);
      circles.push(circle);
    }
  }

  display() {
    noStroke();

    // Draw stem
    fill(this.stemColor);
    rectMode(CENTER);
    rect(this.x, this.y - this.stemHeight / 2, 10, this.stemHeight);

    // Draw cap
    fill(this.capColor);
    arc(this.x, this.y - this.stemHeight, this.capWidth, this.capHeight, PI, 0);
  }
}

class Circle {
  constructor(x, y, velocity) {
    this.position = createVector(x, y);
    this.velocity = velocity;
    this.acceleration = createVector(0, 0.03); // Adjust the gravity here
    this.radius = 5;
    this.color = color(255, 225, 0);
  }

  applyGravity() {
    this.velocity.add(this.acceleration);
  }

  update() {
    this.position.add(this.velocity);
  }

  display() {
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }

  hitsGround() {
    return this.position.y + this.radius >= ground_level - 10;
  }
}

function randomColor() {
  let r = random(80, 150);
  let g = random(50, 100);
  let b = random(20, 80);
  return color(r, g, b);
}

function mouseClicked() {
  let mushroom = new Mushroom(mouseX, ground_level);
  mushrooms.push(mushroom);
}
