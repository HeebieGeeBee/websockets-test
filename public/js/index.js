var socket;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	socket = io.connect('https://websocket-test-005.herokuapp.com/');
	socket.on('mouse', newDrawing);
}

function newDrawing(data) {
	
	noStroke();
	fill(data.color);
	ellipse(data.x, data.y, 20, 20);
}

function mouseDragged() {
	fill(random(0, 120), random(0, 120), random(0, 120));
	
	noStroke();
	ellipse(mouseX, mouseY, 20, 20);


	var color = this.drawingContext.fillStyle; 
	var data = {
		x: mouseX,
		y: mouseY,
		color: color
	}
	
	socket.emit('mouse', data)

	
	
	
}

function draw() {
	camera(0, 0, 0);
	
	
	
	//console.log(mouseX + ',' + mouseY);

}