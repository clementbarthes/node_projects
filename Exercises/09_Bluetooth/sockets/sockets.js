var bleno = require('bleno');
var fs = require('fs');
var net = require('net');
var exec = require('child_process').execFile;
exec('/usr/bin/08_IPC_Socket');

module.exports = function (io) {
    io.on('connection', function(socket){
        
        console.log('a user connected');
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
        
        
    });
    
    
    var samplingRate = 200; //Hz
    function accelStructure()
        {this.Time=[], this.X=[], this.Y=[], this.Z=[]};
    var accelExportPacket = new accelStructure();
    var nSamplePts = 0;
    var unixServer = net.createServer(function(client) {
        console.log('C++ app connected');
        
        client.on('end', function() {
            console.log('C++ app disconnected');
        });
    
        client.on('data',function(data){
            var sampleTime = Date.now();        
            for (var dataIter = 0 ; dataIter < 10; ++dataIter){
                var accX = data.slice(0+12*dataIter,4+12*dataIter).readFloatLE(0);
                var accY = data.slice(4+12*dataIter,8+12*dataIter).readFloatLE(0);
                var accZ = data.slice(8+12*dataIter,12+12*dataIter).readFloatLE(0);  
                accelExportPacket.Time.push(++nSamplePts);
                accelExportPacket.X.push(accX);
                accelExportPacket.Y.push(accY);
                accelExportPacket.Z.push(accZ);
            }
    
            io.sockets.emit('data', accelExportPacket);
            accelExportPacket = new accelStructure();
        });       
    });   
    
    unixServer.on('error', function (e) {
        if (e.code == 'EADDRINUSE') {
            var clientSocket = new net.Socket();
            clientSocket.on('error', function(e) { // handle error trying to talk to server
                if (e.code == 'ECONNREFUSED') {  // No other server listening
                    fs.unlinkSync('/tmp/dataSocket');
                    unixServer.listen('/tmp/dataSocket', function() { //'listening' listener
                        console.log('server recovered');
                    });
                }
            });
            clientSocket.connect({path: '/tmp/dataSocket'}, function() { 
                console.log('Another server is running on /tmp/dataSocket, cannot listen');
                process.exit();
            });
        }
    });

    unixServer.listen('/tmp/dataSocket');


}
