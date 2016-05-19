var socket = io();
window.onload = function(){ 
    document.getElementById("socketTest").onclick =function(){
        console.log("Hello on client console");
        socket.emit('clientButtonPushed');
    }
    socket.on('serverObject',function(object){
        document.title = object.title;
        alert(object.comment);
    })
    
}
