let x; 
let y;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for(let i = 0; i < 8; i++)
  {
    for(let j = 0; j < 8; j++)
    {
      if(i % 2 == 0 && j % 2 == 1 || i % 2 == 1 && j % 2 == 0)
      {
        fill(0);
      }
      else {
        fill(255);
      }

      x = i * (height / 8) + ((width / 2) - (height / 2));
      y = j * (height / 8);

      rect(x, y, height / 8);
      noStroke();
    }
  }
}
