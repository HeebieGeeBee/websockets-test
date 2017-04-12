var socket;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(150,150,150);
	socket = io.connect('https://websocket-test-005.herokuapp.com/');
	socket.on('mouse', newDrawing);
}

function newDrawing(data) {
	noStroke(255);
	fill(randomColor);
	ellipse(data.x, data.y, 20, 20);
}

function mouseDragged() {
	var data = {
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse', data)

	fill("red");
	noStroke();
	ellipse(mouseX, mouseY, 20, 20);
	
	
}

function draw() {
	camera(0, 0, 0);
	
	
	
	//console.log(mouseX + ',' + mouseY);

}