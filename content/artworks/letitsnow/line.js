class Line {
  constructor(a, b, c) {
    this.a = a.copy();
    this.b = b.copy();
  }

  generate() {
    let children = [];

    let v = p5.Vector.sub(this.b, this.a);
    v.div(3);

    let b1 = p5.Vector.add(this.a, v);
    children[0] = new Line(this.a, b1);

    let a1 = p5.Vector.sub(this.b, v);
    children[3] = new Line(a1, this.b);

    v.rotate(-PI / 3);
    let c1 = p5.Vector.add(b1, v);

    children[1] = new Line(b1, c1);
    children[2] = new Line(c1, a1);
    return children;
  }

  show() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);

    this.a.y = this.a.y + 3;
    this.b.y = this.b.y + 3;
  }
}
