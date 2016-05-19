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
};