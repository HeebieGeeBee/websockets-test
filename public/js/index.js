var socket;

function setup() {
	createCanvas(500, 500);
	background(150,150,150);
	socket = io.connect('http://localhost:3000');
	socket.on('mouse', newDrawing);
}

function newDrawing(data) {
	noStroke();
	fill(random(0, 255));
	ellipse(data.x, data.y, 20, 20);
}

function mouseDragged() {
	var data = {
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse', data)

	fill(255);
	noStroke();
	ellipse(mouseX, mouseY, 20, 20);
	
	
}

function draw() {
	
	
	
	//console.log(mouseX + ',' + mouseY);

}