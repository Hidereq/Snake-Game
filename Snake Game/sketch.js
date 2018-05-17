let snake;
let food;
let scl = 20;

function setup() {
	createCanvas(600, 600);


	snake = new Snake();
	food = new Food();

	frameRate(10);



}

function draw() {
	background(120);
	snake.show();
	snake.update();

	snake.move();
	if (snake.dies()) {
				snake.xspeed = 0;
				snake.yspeed = 0;
	}
	food.show();

	if (snake.eatsFood(food)) {
		food.spawn();
		snake.total++;
	}

}
