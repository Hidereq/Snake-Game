class Snake {
	constructor() {
		this.x = floor(random(30))*scl;
		this.y = floor(random(30))*scl;
		this.xspeed = 0;
		this.yspeed = 0;
		this.total = 0;
		this.tail = [];
	}

	show() {
		fill(200, 200, 0);
		rect(this.x, this.y, scl, scl);

		for (let i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}

	}

	move() {

		if (this.total === this.tail.length) {
			for (let i = 0; i < this.tail.length-1; i++) {
				this.tail[i] = this.tail[i+1];
			}
		}

		this.tail[this.total-1] = createVector(this.x, this.y);

		this.x += this.xspeed;
		this.y += this.yspeed;

		this.x = constrain(this.x, 0, width-scl);
		this.y = constrain(this.y, 0, height-scl);


	}


	dies() {
		for (let i=0; i < this.tail.length; i++) {
			let pos = this.tail[i];
			let d = dist(this.x, this.y, pos.x, pos.y);
			if (d < 1) {
				window.alert("YOU DIED");
				location.reload();
			}
		}
	}



	update() {
		if (keyCode == UP_ARROW) {
			this.xspeed = 0;
			this.yspeed = -scl;
		}
		else if (keyCode == DOWN_ARROW) {
			this.xspeed = 0;
			this.yspeed = scl;
		}
		else if (keyCode == LEFT_ARROW) {
			this.xspeed = -scl;
			this.yspeed = 0;
		}
		else if (keyCode == RIGHT_ARROW) {
			this.xspeed = scl;
			this.yspeed = 0;
		}
	}

	eatsFood(food) {
		if (this.x == food.x && this.y == food.y) return true;
	}



}
