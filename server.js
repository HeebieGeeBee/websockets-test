
var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var server = app.listen(port);

app.use(express.static('public'));


console.log("My socket is now running")

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

var store = [];

function newConnection(socket) {
	console.log('new connection: ' + socket.id);
	//store.push(data);
	socket.on('mouse', mouseMsg);

	function mouseMsg(data) {
		socket.broadcast.emit('mouse', data);
		socket.broadcast.emit('mouse', store);
		data.id = socket.id;
		store.push(data);
		

	}
}
	
