/*var socket = require( 'socket.io' );
var express = require( 'express' );
var http = require( 'http' );
var port= process.env.PORT || 1337;

var app = express();
var server = http.createServer( app );

var io = socket.listen( server );
console.log("Server start");

app.get('/', function (req, res) {
    res.send('Hi! Ovo sada stvarno radi! ');
});


io.sockets.on( 'connection', function( client ) {
    console.log( "New client !" );

    // Requests events management
    client.on( 'request-add', function( data ) {
        console.log( 'Request received ' + data.name + ":" + data.message );
        io.sockets.emit( 'request-add', data );
    });
    client.on( 'request-edit', function( data ) {
        console.log( 'Request updated ' + data.name + ":" + data.message );
        io.sockets.emit( 'request-update', { status: 'updated'} );
    });
    client.on( 'request-delete', function( data ) {
        console.log( 'Request deleted ' + data.name + ":" + data.message );
        io.sockets.emit( 'request-delete', { status: 'deleted'} );
    });

    // Messages events management
    client.on( 'message-add', function( data ) {
        console.log( 'Message "' + data.message.message + '" received from:' + data.message.user_id + ' from Room ID:' + data.message.room_id);
        io.sockets.emit( 'message-add', data.message );
    });
    client.on( 'message-edit', function( data ) {
        console.log( 'Message updated ' + data.name + ":" + data.message );
        io.sockets.emit( 'message-update', { status: 'updated'} );
    });
    client.on( 'message-delete', function( data ) {
        console.log( 'Message deleted ' + data.name + ":" + data.message );
        io.sockets.emit( 'message-delete', { status: 'deleted'} );
    });
});

server.listen( port );*/

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var redis = require('redis');

server.listen(8090);
console.log('server started');
console.log('listening port 8090');
io.on('connection', function(client){
    console.log('new member checked')

    client.on( 'checkin', function( data ) {
        console.log( 'Checkin Request received ' + data.name + ":" + data.message );
        io.sockets.emit( 'checkin', data );
    });
})
/*io.sockets.on( 'connection', function( client ) {
    console.log('new member checked')

    client.on( 'checkin', function( data ) {
        console.log( 'Checkin Request received ' + data.name + ":" + data.message );
        io.sockets.emit( 'checkin', data );
    });


});*/