var socket = io();
window.onload = function(){ 
    document.getElementById("socketTest").onclick =function(){
       // This is being called when the user clicks the button
       // You can emit a signal to the server by calling:
       // socket.emit('clientButtonPushed');
                    
    }
    
    // This callback function will be called when a signal is received from 
    // the server
    socket.on('serverObject',function(object){
        // You have received the object called object from the server.
        // You can now make use of it
    })
    
}