module.exports = function (io) {
    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    
        socket.on('clientButtonPushed', function(){
            // This is executed when the client sends 'clientButtonPushed'
            
            // You could acknowledge that you have received the signal by replying
            // with socket.emit("serverObject",objectFromServer);
            
        });
        
        
    });
};