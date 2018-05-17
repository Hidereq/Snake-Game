class Food {
  constructor(x, y) {
    this.spawn();
  }

  show() {
    fill(0, 20, 200);
    rect(this.x, this.y, scl, scl);
  }


  spawn() {
    this.x = floor(random(30))*scl;
    this.y = floor(random(30))*scl;
    if (this.x == snake.x && this.y == snake.y) {
      this.x = floor(random(30))*scl;
      this.y = floor(random(30))*scl;
    }
  }


}
