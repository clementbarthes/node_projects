var bonescriptObject = require('bonescript');
var inputPin = "P9_39";
module.exports = function (io) {
    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    
        socket.on('clientButtonPushed', function(){
            console.log('Viewer pushed a button!');
            var objectFromServer = 
            {name: "Server", comment:"I told you!",title:"HELLO"};
            socket.emit("serverObject",objectFromServer);
        });
        
        
    });
    var analogRead = {X:[], Y:[]};
    var totalIter = 0;
    var packetIter = 0;
    setInterval(readVal,10);
    
    function readVal(){
        ++totalIter;
        ++packetIter;
        analogRead.X.push(totalIter);
        analogRead.Y.push(bonescriptObject.analogRead(inputPin));
        if (packetIter == 10){
            io.sockets.emit('data',analogRead);
            packetIter = 0;
            analogRead = {X:[], Y:[]};
        }
    };
};