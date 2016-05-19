var bonescriptObject = require('bonescript');

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
    var analogRead = {X:"", Y:""};
    totalIter = 0;
    packetIter = 0;
    setInterval(readVal,100);
    
    function readVal(){
        ++totalIter;
        ++packetIter;
        analogRead.X.push(totalIter);
        analogRead.Y.push(bonescriptObject.analogRead(inputPin));
    };
    if (packetIter == 10){
        io.emit('data',analogRead);
        packetIter = 0;
        analogRead = {X:"", Y:""};
    }
};